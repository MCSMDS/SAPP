import hoistStatics from 'hoist-non-react-statics'
import React, { useContext, useMemo, useRef, useReducer } from 'react'
import { isContextConsumer } from 'react-is'
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
      forceComponentUpdateDispatch({ type: 'STORE_UPDATED', payload: { error: undefined } })
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

    const [propsContext, reactReduxForwardedRef, wrapperProps] = useMemo(() => {
      const { reactReduxForwardedRef, ...wrapperProps } = props
      return [props.context, reactReduxForwardedRef, wrapperProps]
    }, [props])
    console.log(propsContext, reactReduxForwardedRef)
    const ContextToUse = useMemo(() => {
      return propsContext && propsContext.Consumer && isContextConsumer(<propsContext.Consumer />) ? propsContext : Context
    }, [propsContext])

    const contextValue = useContext(ContextToUse)
    const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch)
    const store = didStoreComeFromProps ? props.store : contextValue.store

    const childPropsSelector = useMemo(() => {
      return selectorFactory(store.dispatch)
    }, [store])
    const [subscription, notifyNestedSubs] = useMemo(() => {
      const subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription)
      const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription)
      return [subscription, notifyNestedSubs]
    }, [store, didStoreComeFromProps, contextValue])
    const overriddenContextValue = useMemo(() => {
      if (didStoreComeFromProps) return contextValue
      return { ...contextValue, subscription }
    }, [didStoreComeFromProps, contextValue, subscription])

    const [[previousStateUpdateResult], forceComponentUpdateDispatch] = useReducer((state, action) => [action.payload, state[1] + 1], [], () => [null, 0])
    if (previousStateUpdateResult && previousStateUpdateResult.error) throw previousStateUpdateResult.error
    const lastChildProps = useRef()
    const lastWrapperProps = useRef(wrapperProps)
    const childPropsFromStoreUpdate = useRef()
    const renderIsScheduled = useRef(false)

    const actualChildProps = usePureOnlyMemo(() => {
      if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) return childPropsFromStoreUpdate.current;
      return childPropsSelector(store.getState(), wrapperProps)
    }, [store, previousStateUpdateResult, wrapperProps])

    useIsomorphicLayoutEffectWithArgs(captureWrapperProps,
      [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]
    )
    useIsomorphicLayoutEffectWithArgs(subscribeUpdates,
      [store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch],
      [store, subscription, childPropsSelector]
    )

    const renderedWrappedComponent = useMemo(() => (<WrappedComponent {...actualChildProps} ref={reactReduxForwardedRef} />), [reactReduxForwardedRef, actualChildProps])
    const renderedChild = useMemo(() => {
      return (<ContextToUse.Provider value={overriddenContextValue}>{renderedWrappedComponent}</ContextToUse.Provider>)
    }, [renderedWrappedComponent, overriddenContextValue])
    return renderedChild

  }

  const Connect = React.memo(ConnectFunction)
  Connect.WrappedComponent = WrappedComponent
  return hoistStatics(Connect, WrappedComponent)
}