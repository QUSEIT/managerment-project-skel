export default (
  state = {
    attentionConfigurationUser: ''
  }, action,
) => {
  switch (action.type) {
    case 'ATTENTION_CONFIGURATION_USER':
      return {
        ...state,
        attentionConfigurationUser: action.attentionConfigurationUser
      }
    default:
      return state
  }
}