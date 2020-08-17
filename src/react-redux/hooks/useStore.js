import { useContext } from 'react'
import ReactReduxContext from '../components/Context'
import { useReduxContext as useDefaultReduxContext } from './useReduxContext'

export function createStoreHook(context = ReactReduxContext) {
  const useReduxContext = context === ReactReduxContext ? useDefaultReduxContext : () => useContext(context)
  return () => useReduxContext().store;
}

export const useStore = createStoreHook()