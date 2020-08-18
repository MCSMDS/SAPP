import React, { useMemo, useEffect } from 'react'
import Subscription from '../utils/Subscription'

const ReactReduxContext = React.createContext(null);

function Provider({ store, context, children }) {
  const contextValue = useMemo(() => {
    const subscription = new Subscription(store)
    subscription.onStateChange = subscription.notifyNestedSubs
    return { store, subscription }
  }, [store])

  const previousState = useMemo(() => store.getState(), [store])

  useEffect(() => {
    const { subscription } = contextValue
    subscription.trySubscribe()
    if (previousState !== store.getState()) subscription.notifyNestedSubs();
    return () => {
      subscription.tryUnsubscribe()
      subscription.onStateChange = null
    }
  }, [store, contextValue, previousState])
  const Context = context || ReactReduxContext
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default Provider
