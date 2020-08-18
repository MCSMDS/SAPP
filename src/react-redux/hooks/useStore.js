import React, { useContext } from 'react'

const ReactReduxContext = React.createContext(null);
const useDefaultReduxContext = () => useContext(ReactReduxContext);

export function createStoreHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context)
  return () => useReduxContext().store;
}

export const useStore = createStoreHook()