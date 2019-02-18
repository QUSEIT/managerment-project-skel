export default (
  state = {
    leftNavStatus: false
  }, action,
) => {
  switch (action.type) {
    case 'LEFT_NAV_STATUS':
      return {
        ...state,
        leftNavStatus: action.leftNavStatus
      }
    default:
      return state
  }
}