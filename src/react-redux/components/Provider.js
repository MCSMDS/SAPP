import React, { useMemo, useEffect } from 'react'
import ReactReduxContext from './Context'
import Subscription from '../utils/Subscription'

export default function Provider({ store, context, children }) {
  const contextValue = useMemo(() => {
    const subscription = new Subscription(store)
    subscription.onStateChange = subscription.notifyNestedSubs
    return { store, subscription }
  }, [store])
  const previousState = useMemo(() => store.getState(), [store])
  useEffect(() => {
    contextValue.subscription.trySubscribe()
    if (previousState !== store.getState()) contextValue.subscription.notifyNestedSubs();
    return () => {
      contextValue.subscription.tryUnsubscribe()
      contextValue.subscription.onStateChange = null
    }
  }, [store, contextValue, previousState])
  const Context = context || ReactReduxContext
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}