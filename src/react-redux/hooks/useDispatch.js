import ReactReduxContext from '../components/Context'
import { useStore as useDefaultStore, createStoreHook } from './useStore'

export function createDispatchHook(context = ReactReduxContext) {
  const useStore = context === ReactReduxContext ? useDefaultStore : createStoreHook(context)
  return () => useStore().dispatch
}

export const useDispatch = createDispatchHook()