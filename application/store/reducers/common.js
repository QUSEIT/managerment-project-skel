export default (
  state = {
    leftNavStatus: false,
    activeNavObj: {},
    uploadToke: '',
    dialogBoxStatus: false,
    inputDialogBoxStatus: false
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
    case 'DIALOG_BOX_STATUS':
      return {
        ...state,
        dialogBoxStatus: action.dialogBoxStatus
      }
    case 'INPUT_DIALOG_BOX_STATUS':
      return {
        ...state,
        inputDialogBoxStatus: action.inputDialogBoxStatus
      }
    default:
      return state
  }
}