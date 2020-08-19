import React from 'react'
import Context from './Context'
import Subscription from './Subscription'

export default function Provider({ store, children }) {
  const subscription = new Subscription(store)
  subscription.onStateChange = subscription.notifyNestedSubs
  subscription.trySubscribe()
  return <Context.Provider value={{ store, subscription }}>{children}</Context.Provider>
}