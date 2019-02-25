import React, { Fragment } from 'react'
import { connect } from "react-redux"

class InputDialogBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const {
      inputDialogBoxStatus,
      InputDialogBoxTitle,
      onChange,
      value,
      onOk,
      onCancel
    } = this.props

    return (
      <Fragment>
        {
          inputDialogBoxStatus
            ?
            <div className='input-dialog-box-wrapper'>
              <div className="dialog-box">
                <h3>{InputDialogBoxTitle}</h3>
                <div className="input">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="dialog-bottom">
                  <span className="active" onClick={() => onOk()}>确认</span>
                  <span onClick={() => onCancel()}>取消</span>
                </div>
              </div>
            </div>
            :
            null
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  inputDialogBoxStatus: state.common.inputDialogBoxStatus
})

const mapDispatchToProps = dispatch => ({
})

const InputDialogBoxProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDialogBox)

export default InputDialogBoxProps