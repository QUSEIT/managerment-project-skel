export default (
  state = {
    robotAllowList: {},
    robotManagementList: []
  }, action,
) => {
  switch (action.type) {
    case 'ROBOT_ALLOW_LIST':
      return {
        ...state,
        robotAllowList: action.robotAllowList
      }
    case 'ROBOT_MANAGEMENT_LIST':
      return {
        ...state,
        robotManagementList: action.robotManagementList
      }
    default:
      return state
  }
}