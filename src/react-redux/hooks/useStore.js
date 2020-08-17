import React, { useContext } from 'react'
import { useReduxContext as useDefaultReduxContext } from './useReduxContext'

const ReactReduxContext = React.createContext(null);

export function createStoreHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context)
  return () => useReduxContext().store;
}

export const useStore = createStoreHook()