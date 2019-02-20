export default (
  state = {
    topicList: []
  }, action,
) => {
  switch (action.type) {
    case 'TOPIC_LIST':
      return {
        ...state,
        topicList: action.topicList
      }
    default:
      return state
  }
}