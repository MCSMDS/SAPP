export default function pureFinalPropsSelectorFactory(dispatch) {

  const mapStateToProps = state => ({ getStorage: key => state[key] })
  const mapDispatchToProps = dispatch => ({ setStorage: (key, value) => dispatch({ type: key, value }) })

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

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const stateChanged = nextState !== state
    state = nextState
    ownProps = nextOwnProps
    if (stateChanged) return handleNewPropsAndNewState()
    return handleNewProps()
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps)
  }
}