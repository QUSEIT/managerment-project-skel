import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import { connect } from "react-redux"

class CreateRobot extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      codeStatus: false
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { getCreateRobotList } = this.props
    getCreateRobotList()
  }

  // 显示隐藏二维码
  onShowHideQrFn = (status) => {
    const { getCreateRobotQrcode } = this.props
    this.setState({
      codeStatus: status
    })
    if (status) {
      getCreateRobotQrcode()
    }
  }

  render() {
    const { codeStatus } = this.state
    const { createRobotQrcode, createRobotList } = this.props

    return (
      <div className='create-robot-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="robot-page">
          <div
            className="publicBtn"
            onClick={() => this.onShowHideQrFn(!codeStatus)}
          >{codeStatus ? '隐藏二维码' : '生成二维码'}</div>
          {
            codeStatus
            ?
              <div className="code-warppers">
                <img src={createRobotQrcode}/>
              </div>
              :
              null
          }
        <div className="topic-wrappers">
            <div className="topic-top">
              <ul>
                <li className="li">机器人昵称</li>
                <li>状态</li>
              </ul>
            </div>
            <div className="topic-main">
              {
                createRobotList.length
                ?
                  createRobotList.map((item, i) => {
                    return (
                      <ul key={i}>
                        <li className="li">{item.nickname}</li>
                        <li>
                          <a href="javascript:;">{item.state}</a>
                        </li>
                      </ul>
                    )
                  })
                  :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createRobotQrcode: state.createRobot.createRobotQrcode,
  createRobotList: state.createRobot.createRobotList,
})

const mapDispatchToProps = dispatch => ({
  getCreateRobotQrcode: (data) => {
    dispatch({
      type: 'GET_CREATE_ROBOT_QRCODE',
    })
  },
  getCreateRobotList: (data) => {
    dispatch({
      type: 'GET_CREATE_ROBOT_LIST',
    })
  },
})

const CreateRobotProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRobot)

export default CreateRobotProps
