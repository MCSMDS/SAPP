import hoistStatics from 'hoist-non-react-statics'
import React, { useContext, useMemo, useRef, useReducer } from 'react'
import Subscription from './Subscription'
import { useLayoutEffect } from 'react'
import Context from './Context'
import selectorFactory from './selectorFactory'

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useLayoutEffect(() => effectFunc(...effectArgs), [effectFunc, effectArgs, dependencies])
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps
  lastChildProps.current = actualChildProps
  renderIsScheduled.current = false
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null
    notifyNestedSubs()
  }
}

function subscribeUpdates(store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  let didUnsubscribe = false
  const checkForUpdates = () => {
    if (didUnsubscribe) return
    const latestStoreState = store.getState()
    let newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current)
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) notifyNestedSubs()
    } else {
      lastChildProps.current = newChildProps
      childPropsFromStoreUpdate.current = newChildProps
      renderIsScheduled.current = true
      forceComponentUpdateDispatch({ type: 'STORE_UPDATED', payload: {} })
    }
  }
  subscription.onStateChange = checkForUpdates
  subscription.trySubscribe()
  checkForUpdates()
  const unsubscribeWrapper = () => {
    didUnsubscribe = true
    subscription.tryUnsubscribe()
    subscription.onStateChange = null
  }
  return unsubscribeWrapper
}



export default function wrapWithConnect(WrappedComponent) {
  const usePureOnlyMemo = useMemo

  function ConnectFunction(props) {
    const contextValue = useContext(Context)
    const store = contextValue.store

    const childPropsSelector = useMemo(() => selectorFactory(store.dispatch), [store])
    const [subscription, notifyNestedSubs] = useMemo(() => {
      const subscription = new Subscription(store, contextValue.subscription)
      const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription)
      return [subscription, notifyNestedSubs]
    }, [store, contextValue])
    const overriddenContextValue = useMemo(() => ({ ...contextValue, subscription }), [contextValue, subscription])

    const [previousStateUpdateResult, forceComponentUpdateDispatch] = useReducer((state, action) => action.payload, null)
    const lastChildProps = useRef()
    const lastWrapperProps = useRef(props)
    const childPropsFromStoreUpdate = useRef()
    const renderIsScheduled = useRef(false)

    const actualChildProps = usePureOnlyMemo(() => {
      if (childPropsFromStoreUpdate.current && props === lastWrapperProps.current) return childPropsFromStoreUpdate.current;
      return childPropsSelector(store.getState(), props)
    }, [store, previousStateUpdateResult, props])

    useIsomorphicLayoutEffectWithArgs(captureWrapperProps,
      [lastWrapperProps, lastChildProps, renderIsScheduled, props, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]
    )
    useIsomorphicLayoutEffectWithArgs(subscribeUpdates,
      [store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch],
      [store, subscription, childPropsSelector]
    )

    const renderedWrappedComponent = useMemo(() => (<WrappedComponent {...actualChildProps} />), [actualChildProps])
    const renderedChild = useMemo(() => {
      return (<Context.Provider value={overriddenContextValue}>{renderedWrappedComponent}</Context.Provider>)
    }, [renderedWrappedComponent, overriddenContextValue])
    return renderedChild

  }

  const Connect = React.memo(ConnectFunction)
  Connect.WrappedComponent = WrappedComponent
  return hoistStatics(Connect, WrappedComponent)
}