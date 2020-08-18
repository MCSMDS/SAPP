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

const strictEqual = (a, b) => a === b

export function createConnect({ connectHOC = connectAdvanced, mapStateToPropsFactories = defaultMapStateToPropsFactories, mapDispatchToPropsFactories = defaultMapDispatchToPropsFactories, mergePropsFactories = defaultMergePropsFactories, selectorFactory = defaultSelectorFactory } = {}) {
  return function connect(mapStateToProps, mapDispatchToProps) {
    const initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories)
    const initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories)
    const initMergeProps = match(undefined, mergePropsFactories)
    return connectHOC(selectorFactory, {
      methodName: 'connect',
      getDisplayName: name => `Connect(${name})`,
      shouldHandleStateChanges: Boolean(mapStateToProps),
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure: true,
      areStatesEqual: strictEqual,
      areOwnPropsEqual: shallowEqual,
      areStatePropsEqual: shallowEqual,
      areMergedPropsEqual: shallowEqual
    })
  }
}

export default createConnect()