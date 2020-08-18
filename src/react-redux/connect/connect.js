import connectAdvanced from '../components/connectAdvanced'
import defaultSelectorFactory from './selectorFactory'

const whenMergePropsIsOmitted = function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1
}

function wrapMapToPropsFunc(mapToProps) {
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
  return connectAdvanced(defaultSelectorFactory, {
    shouldHandleStateChanges: Boolean(mapStateToProps),
    initMapStateToProps: wrapMapToPropsFunc(mapStateToProps),
    initMapDispatchToProps: wrapMapToPropsFunc(mapDispatchToProps),
    initMergeProps: whenMergePropsIsOmitted
  })
}