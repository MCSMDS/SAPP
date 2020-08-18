import hoistStatics from 'hoist-non-react-statics'
import React, { useContext, useMemo, useRef, useReducer } from 'react'
import { isContextConsumer } from 'react-is'
import Subscription from '../utils/Subscription'
import { useLayoutEffect } from 'react'

const ReactReduxContext = React.createContext(null);

const EMPTY_ARRAY = []
const NO_SUBSCRIPTION_ARRAY = [null, null]

function storeStateUpdatesReducer(state, action) {
  const [, updateCount] = state
  return [action.payload, updateCount + 1]
}

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

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges) return
  let didUnsubscribe = false
  let lastThrownError = null
  const checkForUpdates = () => {
    if (didUnsubscribe) return
    const latestStoreState = store.getState()
    let newChildProps, error
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current)
    } catch (e) {
      error = e
      lastThrownError = e
    }
    if (!error) lastThrownError = null
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) notifyNestedSubs()
    } else {
      lastChildProps.current = newChildProps
      childPropsFromStoreUpdate.current = newChildProps
      renderIsScheduled.current = true
      forceComponentUpdateDispatch({ type: 'STORE_UPDATED', payload: { error } })
    }
  }

  subscription.onStateChange = checkForUpdates
  subscription.trySubscribe()

  checkForUpdates()

  const unsubscribeWrapper = () => {
    didUnsubscribe = true
    subscription.tryUnsubscribe()
    subscription.onStateChange = null
    if (lastThrownError) throw lastThrownError
  }

  return unsubscribeWrapper
}

const initStateUpdates = () => [null, 0]

export default function connectAdvanced(

  selectorFactory,
  {
    getDisplayName = name => `ConnectAdvanced(${name})`,

    methodName = 'connectAdvanced',

    renderCountProp = undefined,

    shouldHandleStateChanges = true,

    storeKey = 'store',

    withRef = false,

    forwardRef = false,

    context = ReactReduxContext,

    ...connectOptions
  } = {}
) {

  const Context = context

  return function wrapWithConnect(WrappedComponent) {
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    const displayName = getDisplayName(wrappedComponentName)
    const selectorFactoryOptions = { ...connectOptions, getDisplayName, methodName, renderCountProp, shouldHandleStateChanges, storeKey, displayName, wrappedComponentName, WrappedComponent }
    const { pure } = connectOptions

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions)
    }

    const usePureOnlyMemo = pure ? useMemo : callback => callback()

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = useMemo(() => {
        const { reactReduxForwardedRef, ...wrapperProps } = props
        return [props.context, reactReduxForwardedRef, wrapperProps]
      }, [props])

      const ContextToUse = useMemo(() => {
        return propsContext && propsContext.Consumer && isContextConsumer(<propsContext.Consumer />) ? propsContext : Context
      }, [propsContext])

      const contextValue = useContext(ContextToUse)

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch)


      const store = didStoreComeFromProps ? props.store : contextValue.store

      const childPropsSelector = useMemo(() => {
        return createChildSelector(store)
      }, [store])

      const [subscription, notifyNestedSubs] = useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY

        const subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription)

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription)

        return [subscription, notifyNestedSubs]
      }, [store, didStoreComeFromProps, contextValue])

      const overriddenContextValue = useMemo(() => {
        if (didStoreComeFromProps) return contextValue

        return { ...contextValue, subscription }
      }, [didStoreComeFromProps, contextValue, subscription])

      const [[previousStateUpdateResult], forceComponentUpdateDispatch] = useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates)

      if (previousStateUpdateResult && previousStateUpdateResult.error) throw previousStateUpdateResult.error


      const lastChildProps = useRef()
      const lastWrapperProps = useRef(wrapperProps)
      const childPropsFromStoreUpdate = useRef()
      const renderIsScheduled = useRef(false)

      const actualChildProps = usePureOnlyMemo(() => {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current
        }

        return childPropsSelector(store.getState(), wrapperProps)
      }, [store, previousStateUpdateResult, wrapperProps])

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps,
        [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]
      )

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates,
        [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch],
        [store, subscription, childPropsSelector]
      )

      const renderedWrappedComponent = useMemo(() => (<WrappedComponent {...actualChildProps} ref={reactReduxForwardedRef} />), [reactReduxForwardedRef, actualChildProps])

      const renderedChild = useMemo(() => {
        if (shouldHandleStateChanges) return (<ContextToUse.Provider value={overriddenContextValue}>              {renderedWrappedComponent}            </ContextToUse.Provider>)
        return renderedWrappedComponent
      }, [renderedWrappedComponent, overriddenContextValue])

      return renderedChild
    }

    const Connect = pure ? React.memo(ConnectFunction) : ConnectFunction

    Connect.WrappedComponent = WrappedComponent
    Connect.displayName = displayName

    if (forwardRef) {
      const forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        return <Connect {...props} reactReduxForwardedRef={ref} />
      })
      forwarded.displayName = displayName
      forwarded.WrappedComponent = WrappedComponent
      return hoistStatics(forwarded, WrappedComponent)
    }

    return hoistStatics(Connect, WrappedComponent)
  }
}
