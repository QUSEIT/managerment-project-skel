export default (
  state = {
    adminUserList: []
  }, action,
) => {
  switch (action.type) {
    case 'ADMIN_USER_LIST':
      return {
        ...state,
        adminUserList: action.adminUserList
      }
    default:
      return state
  }
}