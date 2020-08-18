export default function finalPropsSelectorFactory(dispatch, { initMapStateToProps, initMapDispatchToProps, initMergeProps }) {
  function shallowEqual(objA, objB) {
    if (objA === objB) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !objA[keysA[i]] === objB[keysA[i]]) return false;
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
    stateProps = initMapStateToProps(state, ownProps)
    dispatchProps = initMapDispatchToProps(dispatch, ownProps)
    mergedProps = initMergeProps(stateProps, dispatchProps, ownProps)
    hasRunAtLeastOnce = true
    return mergedProps
  }

  function handleNewPropsAndNewState() {
    stateProps = initMapStateToProps(state, ownProps)
    if (initMapDispatchToProps.dependsOnOwnProps) dispatchProps = initMapDispatchToProps(dispatch, ownProps)
    mergedProps = initMergeProps(stateProps, dispatchProps, ownProps)
    return mergedProps
  }

  function handleNewProps() {
    if (initMapStateToProps.dependsOnOwnProps) stateProps = initMapStateToProps(state, ownProps)
    if (initMapDispatchToProps.dependsOnOwnProps) dispatchProps = initMapDispatchToProps(dispatch, ownProps)
    mergedProps = initMergeProps(stateProps, dispatchProps, ownProps)
    return mergedProps
  }

  function handleNewState() {
    const nextStateProps = initMapStateToProps(state, ownProps)
    const statePropsChanged = !shallowEqual(nextStateProps, stateProps)
    stateProps = nextStateProps
    if (statePropsChanged) mergedProps = initMergeProps(stateProps, dispatchProps, ownProps)
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