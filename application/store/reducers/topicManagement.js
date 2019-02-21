export default (
  state = {
    topicList: [],
    topicTypeList: [],
    topicUser: {}
  }, action,
) => {
  switch (action.type) {
    case 'TOPIC_LIST':
      return {
        ...state,
        topicList: action.topicList
      }
    case 'TOPIC_TYPE_LIST':
      return {
        ...state,
        topicTypeList: action.topicTypeList
      }
    case 'TOPIC_PUBLIC_USER':
      return {
        ...state,
        topicUser: action.topicUser
      }
    default:
      return state
  }
}