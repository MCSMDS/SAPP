import React from 'react';
import { useStore as useDefaultStore, createStoreHook } from './useStore'

const ReactReduxContext = React.createContext(null);

export function createDispatchHook(context = ReactReduxContext) {
  const useStore = context === ReactReduxContext ? useDefaultStore : createStoreHook(context)
  return () => useStore().dispatch
}

export const useDispatch = createDispatchHook()