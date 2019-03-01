import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import InputDialogBox from '../../../components/management/inputDialogBox'
import { connect } from "react-redux"

class RobotManagement extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      selectUserStatus: false, // 显示/隐藏选择用户状态
      userPage: 1, // 获取用户页数
      nickname: '',
      addStatus: false,
      nameVal: '',
      labelObj: {
        labelId: '',
        title: '',
        status: 0
      },
      inputNicknameVal: '',
      inputNicknameIndex: ''
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const {userPage} = this.state
    const { getBotAllowList, getUserList, getBotFakerUserList } = this.props
    getBotAllowList()
    getUserList(userPage)
    getBotFakerUserList()
  }

  // 确定添加昵称
  onAddNickNames = (mark) => {
    const { nameVal } = this.state
    const { pushRobotAllowList, robotAllowList } = this.props
    let robotAllowLists = robotAllowList
    if (robotAllowLists.nickname.indexOf(nameVal) > -1) {
      alert('此昵称已存在...')
      return false
    } else {
      if (nameVal) {
        robotAllowLists.nickname.push(nameVal)
        pushRobotAllowList(robotAllowLists)
        this.onEditFn(mark)
      } else {
        alert('昵称不能为空...')
      }
    }
  }

  // 编辑昵称和删除
  handleRender (mark, value, index) {
    const { setInputDialogBoxStatusFn } = this.props
    if (mark === 'edit') {
      this.setState({
        inputNicknameVal: value,
        inputNicknameIndex: index,
      })
      setInputDialogBoxStatusFn(true)
    } else {
      const { pushRobotAllowList, robotAllowList } = this.props
      let robotAllowLists = robotAllowList
      robotAllowLists.nickname.splice(index, 1)
      pushRobotAllowList(robotAllowLists)
      this.onEditFn(mark)
    }
  }

  onEditFn = (mark) => {
    const { robotAllowList, setBotAllowList } = this.props
    let start_str = ''
    let end_str = ''
    if (mark === 'edit') {
      start_str = ''
      end_str = ''
    } else {
      start_str = robotAllowList.start_str
      end_str = robotAllowList.end_str
    }
    const postData = {
      start_str: start_str,
      end_str: end_str,
      nickname: robotAllowList.nickname
    }
    this.setState({ nameVal: '' })
    setBotAllowList(postData)
  }

  // 获取上一批/下一批用户数据
  onSwiperFn = (status) => {
    const { userPage } = this.state
    const { topicUser, getUserList } = this.props
    const dataCount = Math.ceil(topicUser.data_count / 10)
    if (status && userPage > 1) {
      this.setState({
        userPage: userPage - 1
      })
    } else {
      if (status && userPage === 1) {
        return false
      }
    }
    if (!status && userPage < dataCount) {
      this.setState({
        userPage: userPage + 1
      })
    } else {
      if (!status && userPage === dataCount) {
        return false
      }
    }
    getUserList(this.state.userPage)
  }

  onSetUser = (nickname, mark, unionid) => {
    const { setEditFakerUser } = this.props
    if (nickname === '') {
      nickname = this.state.nickname
    }
    const postData = {
      type: mark,
      unionid: unionid || '',
      nickname: nickname
    }
    setEditFakerUser(postData)
    this.setState({
      selectUserStatus: false
    })
  }

  // input输入值
  onChangeInput = (e) => {
    this.setState({ inputNicknameVal: e.target.value })
  }

  // input对话框取消
  onInputCancelFn = () => {
    const { setInputDialogBoxStatusFn } = this.props
    setInputDialogBoxStatusFn(false)
  }

  // input对话框确认
  onInputOkFn = () => {
    const { inputNicknameVal, inputNicknameIndex } = this.state
    const { setInputDialogBoxStatusFn, robotAllowList, setBotAllowList } = this.props
    if (!inputNicknameVal) {
      alert('请填写昵称...')
      return false
    }
    robotAllowList.nickname[inputNicknameIndex] = inputNicknameVal
    setBotAllowList(robotAllowList)
    setInputDialogBoxStatusFn(false)
  }

  render() {
    const { addStatus, nameVal, selectUserStatus, labelObj, inputNicknameVal } = this.state
    const { robotAllowList, topicUser, robotManagementList } = this.props

    return (
      <div className='robot-management-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="robot-management-content">
          {
            addStatus
            ?
              <div className="add-nickname">
                <input
                  type="text"
                  value={nameVal}
                  onChange={(e) => {
                    this.setState({ nameVal : e.target.value })
                  }}
                />
                <div className="add-name-btn" onClick={() => this.onAddNickNames('add')}>添加</div>
                <div className="add-name-btn" onClick={() => this.setState({ addStatus: false })}>取消</div>
              </div>
              :
              <div className="publicBtn" onClick={() => this.setState({ addStatus: true })}>增加昵称</div>
          }
          <div className="admin-robots">
            <div className="topic-wrapper topic-wrapper-width">
              <div className="topic-top">
                <div className='ul'>
                  <li>机器人昵称</li>
                  <li>操作</li>
                  <li>设置关联用户</li>
                </div>
                {
                  selectUserStatus
                    ?
                    <div className="user-wrapper">
                      <ul>
                        {
                          topicUser.data.length
                            ?
                            topicUser.data.map((item, i) => {
                              return (
                                <li
                                  key={i}
                                  onClick={() => this.onSetUser('', 0, item.uid)}
                                >{item.nickname}</li>
                              )
                            })
                            :
                            null
                        }
                        <div className="user-footer">
                          <span
                            className="active"
                            onClick={() => this.onSwiperFn(true)}
                          >上一批</span>
                          <span
                            onClick={() => this.onSwiperFn(false)}
                          >下一批</span>
                        </div>
                      </ul>
                    </div>
                    :
                    null
                }
              </div>
              <div className="topic-main">
                {
                  JSON.stringify(robotAllowList) !== '{}'
                  ?
                    robotAllowList.nickname.map((item, i) => {
                      return (
                        <ul key={i}>
                          <li>
                            <span>{item}</span>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              onClick={() => this.handleRender('edit', item, i)}
                            >编辑</a>
                            <a
                              className='red'
                              href="javascript:;"
                              onClick={() => this.handleRender('delect', item, i)}
                            >删除</a>
                          </li>
                          <li className="selectUser">
                            <div
                              className="input"
                              onClick={() => this.setState({ selectUserStatus: !selectUserStatus, nickname: item })}
                            >
                              请选择
                            </div>
                          </li>
                        </ul>
                      )
                    })
                    :
                    null
                }
              </div>
            </div>
            <div className="topic-wrapper topic-wrapper-width">
              <div className="topic-top">
                <ul className='ul'>
                  <li className="li">start</li>
                  <li className="li">end</li>
                  <li>操作</li>
                </ul>
              </div>
              <div className="topic-main">
                <ul>
                  <li className="li">{robotAllowList.start_str}</li>
                  <li className="li">{robotAllowList.end_str}</li>
                  <li>
                    <a href="javascript:;">编辑</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="topic-wrapper">
            <div className="topic-top" style={{width: 100 + '%'}}>
              <ul className='ul'>
                <li className="li">机器人</li>
                <li className="li">关联用户</li>
                <li className="li">用户昵称</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="topic-main" style={{width: 100 + '%'}}>
              {
                robotManagementList.length
                ?
                  robotManagementList.map((item, i) => {
                    return (
                      <ul key={i}>
                        <li className="li">{item.nickname}</li>
                        <li className="li"><img src={item.user.avatar}/></li>
                        <li className="li">{item.user.nickname}</li>
                        <li>
                          <a
                            className='red'
                            href="javascript:;"
                            onClick={() => this.onSetUser(item.nickname, 1, '')}
                          >删除</a>
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
        {/*input对话框*/}
        <InputDialogBox
          InputDialogBoxTitle={labelObj.title}
          onChange={(e) => this.onChangeInput(e)}
          value={inputNicknameVal}
          onOk={() => this.onInputOkFn()}
          onCancel={() => this.onInputCancelFn()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  robotAllowList: state.robotManagement.robotAllowList,
  topicUser: state.topicManagement.topicUser,
  robotManagementList: state.robotManagement.robotManagementList,
})

const mapDispatchToProps = dispatch => ({
  pushRobotAllowList: robotAllowList => {
    dispatch({
      type: 'ROBOT_ALLOW_LIST',
      robotAllowList
    })
  },
  getBotAllowList: data => {
    dispatch({
      type: 'GET_BOT_ALLOW_LIST',
    })
  },
  setBotAllowList: data => {
    dispatch({
      type: 'SET_BOT_ALLOW_LIST',
      data
    })
  },
  getUserList: (data) => {
    dispatch({
      type: 'GET_TOPIC_PUBLIC_USER',
      data
    })
  },
  getBotFakerUserList: data => {
    dispatch({
      type: 'GET_BOT_FAKER_USER_LIST',
    })
  },
  setEditFakerUser: data => {
    dispatch({
      type: 'SET_EDIT_FAKER_USER',
      data
    })
  },
  setInputDialogBoxStatusFn: inputDialogBoxStatus => {
    dispatch({
      type: 'INPUT_DIALOG_BOX_STATUS',
      inputDialogBoxStatus
    })
  }
})

const RobotManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotManagement)

export default RobotManagementProps
