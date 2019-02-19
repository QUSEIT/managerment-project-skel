export default (
  state = {
    leftNavStatus: false,
    activeNavObj: {}
  }, action,
) => {
  switch (action.type) {
    case 'LEFT_NAV_STATUS':
      return {
        ...state,
        leftNavStatus: action.leftNavStatus
      }
    case 'ACTIVE_NAV_OBJ':
      return {
        ...state,
        activeNavObj: action.activeNavObj
      }
    default:
      return state
  }
}