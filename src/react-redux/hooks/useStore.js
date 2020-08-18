import React, { useContext } from 'react'

const useDefaultReduxContext = () => useContext(React.createContext(null));
const ReactReduxContext = React.createContext(null);

export function createStoreHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context)
  return () => useReduxContext().store;
}

export const useStore = createStoreHook()