export default (
  state = {
    labelList: []
  }, action,
) => {
  switch (action.type) {
    case 'ASSOCIATION_LABEL_LIST':
      return {
        ...state,
        labelList: action.labelList
      }
    default:
      return state
  }
}