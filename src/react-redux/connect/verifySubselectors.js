function verify(selector, methodName, displayName) {
  if (!selector) throw new Error(`Unexpected value for ${methodName} in ${displayName}.`)

}
export default function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName)
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName)
  verify(mergeProps, 'mergeProps', displayName)
}