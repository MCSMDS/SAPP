import connectAdvanced from './connectAdvanced'

const defaultMergeProps = (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps, ...dispatchProps })
const getDependsOnOwnProps = mapToProps => mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1
const wrapMapToPropsFunc = mapToProps => {
  const proxy = (stateOrDispatch, ownProps) => proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch)
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

function connect(mapStateToProps, mapDispatchToProps) {
  return connectAdvanced({
    mapStateToProps: wrapMapToPropsFunc(mapStateToProps),
    mapDispatchToProps: wrapMapToPropsFunc(mapDispatchToProps),
    mergeProps: defaultMergeProps
  })
}
export default connect(
  state => ({ getStorage: key => state[key] }),
  dispatch => ({ setStorage: (key, value) => dispatch({ type: key, value }) })
)