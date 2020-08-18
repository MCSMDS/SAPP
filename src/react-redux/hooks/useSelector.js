import { useReducer, useRef, useMemo, useContext, useDebugValue } from 'react'
import { useReduxContext as useDefaultReduxContext } from './useReduxContext'
import Subscription from '../utils/Subscription'
import React, { useLayoutEffect } from 'react'

const ReactReduxContext = React.createContext(null);

const refEquality = (a, b) => a === b

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  const [, forceRender] = useReducer(s => s + 1, 0)
  const subscription = useMemo(() => new Subscription(store, contextSub), [store, contextSub])
  const latestSubscriptionCallbackError = useRef()
  const latestSelector = useRef()
  const latestStoreState = useRef()
  const latestSelectedState = useRef()
  const storeState = store.getState()
  let selectedState

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState)
    } else {
      selectedState = latestSelectedState.current
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`
    }
    throw err
  }

  useLayoutEffect(() => {
    latestSelector.current = selector
    latestStoreState.current = storeState
    latestSelectedState.current = selectedState
    latestSubscriptionCallbackError.current = undefined
  })

  useLayoutEffect(() => {
    function checkForUpdates() {
      try {
        const newSelectedState = latestSelector.current(store.getState())
        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return
        }
        latestSelectedState.current = newSelectedState
      } catch (err) {
        latestSubscriptionCallbackError.current = err
      }
      forceRender()
    }
    subscription.onStateChange = checkForUpdates
    subscription.trySubscribe()
    checkForUpdates()
    return () => subscription.tryUnsubscribe()
  }, [store, subscription])
  return selectedState
}

export function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context)
  return function useSelector(selector, equalityFn = refEquality) {
    const { store, subscription: contextSub } = useReduxContext()
    const selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub)
    useDebugValue(selectedState)
    return selectedState
  }
}

export const useSelector = createSelectorHook()