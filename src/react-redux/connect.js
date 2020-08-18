import connectAdvanced from './connectAdvanced'

const getDependsOnOwnProps = mapToProps => mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1
const wrapMapToPropsFunc = mapToProps => {
  const proxy = stateOrDispatch => proxy.mapToProps(stateOrDispatch)
  proxy.dependsOnOwnProps = true
  proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch) {
    proxy.mapToProps = mapToProps
    proxy.dependsOnOwnProps = false;
    let props = proxy(stateOrDispatch)
    if (typeof props === 'function') {
      proxy.mapToProps = props
      proxy.dependsOnOwnProps = getDependsOnOwnProps(props)
      props = proxy(stateOrDispatch)
    }
    return props
  }
  return proxy
}

export default connectAdvanced({
  mapStateToProps: wrapMapToPropsFunc(state => ({ getStorage: key => state[key] })),
  mapDispatchToProps: wrapMapToPropsFunc(dispatch => ({ setStorage: (key, value) => dispatch({ type: key, value }) })),
  mergeProps: (stateProps, dispatchProps, ownProps) => ({ ...ownProps, ...stateProps, ...dispatchProps })
})