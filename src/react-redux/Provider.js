import React, { useMemo, useEffect } from 'react'
import Context from './Context'
import Subscription from './Subscription'

export default function Provider({ store, children }) {
  const contextValue = useMemo(() => {
    const subscription = new Subscription(store)
    subscription.onStateChange = subscription.notifyNestedSubs
    return { store, subscription }
  }, [store])
  useEffect(() => {
    contextValue.subscription.trySubscribe()
    return () => {
      contextValue.subscription.tryUnsubscribe()
      contextValue.subscription.onStateChange = null
    }
  }, [store, contextValue])
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}