import React, { Fragment } from 'react'
import { connect } from "react-redux"

class DialogBox extends React.Component {
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
    const { dialogBoxStatus, dialogObj, onOk, onCancel } = this.props

    return (
      <Fragment>
        {
          dialogBoxStatus
            ?
            <div className='dialog-box-wrapper'>
              <div className="dialog-box">
                <h3>{dialogObj.title}</h3>
                <p>{dialogObj.content}</p>
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
  dialogBoxStatus: state.common.dialogBoxStatus
})

const mapDispatchToProps = dispatch => ({
})

const DialogBoxProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogBox)

export default DialogBoxProps