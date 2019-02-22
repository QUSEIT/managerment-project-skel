export default (
  state = {
    leftNavStatus: false,
    activeNavObj: {},
    uploadToke: ''
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
    case 'SET_UP_TOKEN':
      return {
        ...state,
        uploadToke: action.uploadToke
      }
    default:
      return state
  }
}