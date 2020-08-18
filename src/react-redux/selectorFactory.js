export default function pureFinalPropsSelectorFactory({ mapStateToProps, mapDispatchToProps }, dispatch) {

  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return false;
    }
  }

  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return false;
    }
    return true;
  }

  let hasRunAtLeastOnce = false
  let state
  let ownProps
  let stateProps
  let dispatchProps
  let mergedProps

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState
    ownProps = firstOwnProps
    stateProps = mapStateToProps(state)
    dispatchProps = mapDispatchToProps(dispatch)
    mergedProps = ({ ...ownProps, ...stateProps, ...dispatchProps });
    hasRunAtLeastOnce = true
    return mergedProps
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state)
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch)
    mergedProps = ({ ...ownProps, ...stateProps, ...dispatchProps });
    return mergedProps
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state)
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch)
    mergedProps = ({ ...ownProps, ...stateProps, ...dispatchProps });
    return mergedProps
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state)
    const statePropsChanged = !shallowEqual(nextStateProps, stateProps)
    stateProps = nextStateProps
    if (statePropsChanged) mergedProps = ({ ...ownProps, ...stateProps, ...dispatchProps });
    return mergedProps
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !shallowEqual(nextOwnProps, ownProps)
    const stateChanged = nextState !== state
    state = nextState
    ownProps = nextOwnProps
    if (propsChanged && stateChanged) return handleNewPropsAndNewState()
    if (propsChanged) return handleNewProps()
    if (stateChanged) return handleNewState()
    return mergedProps
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps)
  }
}