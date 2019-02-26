export default (
  state = {
    createRobotQrcode: '',
    createRobotList: [],
  }, action,
) => {
  switch (action.type) {
    case 'CREATE_ROBOT_QRCODE':
      return {
        ...state,
        createRobotQrcode: action.createRobotQrcode
      }
    case 'CREATE_ROBOT_LIST':
      return {
        ...state,
        createRobotList: action.createRobotList
      }
    default:
      return state
  }
}