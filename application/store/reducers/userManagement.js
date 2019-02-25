export default (
  state = {
    memberList: []
  }, action,
) => {
  switch (action.type) {
    case 'MEMBER_LIST':
      return {
        ...state,
        memberList: action.memberList
      }
    default:
      return state
  }
}