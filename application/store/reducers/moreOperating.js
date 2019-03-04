export default (
  state = {
    forumLoginStatus: false
  }, action,
) => {
  switch (action.type) {
    case 'FORUM_LOGIN_STATUS':
      return {
        ...state,
        forumLoginStatus: action.forumLoginStatus
      }
    default:
      return state
  }
}