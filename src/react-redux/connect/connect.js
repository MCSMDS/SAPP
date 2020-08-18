import connectAdvanced from '../components/connectAdvanced'
import shallowEqual from '../utils/shallowEqual'
import defaultMapDispatchToPropsFactories from './mapDispatchToProps'
import defaultMapStateToPropsFactories from './mapStateToProps'
import defaultMergePropsFactories from './mergeProps'
import defaultSelectorFactory from './selectorFactory'

function match(arg, factories) {
  for (let i = factories.length - 1; i >= 0; i--) {
    const result = factories[i](arg)
    if (result) return result
  }
  return () => { throw new Error(``) }
}

export default function connect(mapStateToProps, mapDispatchToProps) {
  return connectAdvanced(defaultSelectorFactory, {
    shouldHandleStateChanges: Boolean(mapStateToProps),
    initMapStateToProps: match(mapStateToProps, defaultMapStateToPropsFactories),
    initMapDispatchToProps: match(mapDispatchToProps, defaultMapDispatchToPropsFactories),
    initMergeProps: match(undefined, defaultMergePropsFactories),
    pure: true,
    areStatesEqual: (a, b) => a === b,
    areOwnPropsEqual: shallowEqual,
    areStatePropsEqual: shallowEqual,
    areMergedPropsEqual: shallowEqual
  })
}