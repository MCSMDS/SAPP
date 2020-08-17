const saveState = state => localStorage.setItem("SAPP", JSON.stringify(state));
const readState = () => JSON.parse(localStorage.getItem("SAPP"));

export default baseReducer => {
  const update = state => {
    saveState(state);
    return state;
  }
  return (state = {}, action) => {
    if (action.type === "init") action.show();
    if (action.type.startsWith("@@redux")) return update(readState() || baseReducer(state, action));
    return update(baseReducer(state, action));
  }
}