export default function pureFinalPropsSelectorFactory(dispatch) {

  const mapStateToProps = state => ({ getStorage: key => state[key] })
  const mapDispatchToProps = dispatch => ({ setStorage: (key, value) => dispatch({ type: key, value }) })

  function shallowEqual(objA, objB) {
    if (objA === objB) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !(objA[keysA[i]] === objB[keysA[i]])) return false;
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
    mergedProps = ({ ...ownProps, ...stateProps, ...dispatchProps });
    return mergedProps
  }

  function handleNewProps() {
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
    state = nextState
    ownProps = nextOwnProps
    if (!shallowEqual(nextOwnProps, ownProps) && nextState !== state) return handleNewPropsAndNewState()
    if (!shallowEqual(nextOwnProps, ownProps)) return handleNewProps()
    if (nextState !== state) return handleNewState()
    return mergedProps
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps)
  }
}