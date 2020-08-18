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

function initProxySelector() {
  const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
    return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch)
  }
  proxy.dependsOnOwnProps = true
  proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
    proxy.mapToProps = mapToProps
    proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps)
    let props = proxy(stateOrDispatch, ownProps)
    if (typeof props === 'function') {
      proxy.mapToProps = props
      proxy.dependsOnOwnProps = getDependsOnOwnProps(props)
      props = proxy(stateOrDispatch, ownProps)
    }
    return props
  }
  return proxy
}

export default function connect(mapStateToProps, mapDispatchToProps) {
  console.log(match(mapDispatchToProps, defaultMapDispatchToPropsFactories))
  console.log(match(undefined, defaultMergePropsFactories))
  return connectAdvanced(defaultSelectorFactory, {
    shouldHandleStateChanges: Boolean(mapStateToProps),
    initMapStateToProps: initProxySelector,
    initMapDispatchToProps: match(mapDispatchToProps, defaultMapDispatchToPropsFactories),
    initMergeProps: match(undefined, defaultMergePropsFactories),
    pure: true,
    areStatesEqual: (a, b) => a === b,
    areOwnPropsEqual: shallowEqual,
    areStatePropsEqual: shallowEqual,
    areMergedPropsEqual: shallowEqual
  })
}