import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import { connect } from "react-redux"

class RobotManagement extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      selectUserStatus: false, // 显示/隐藏选择用户状态
      userPage: 1, // 获取用户页数
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
    const postData = {
      type: mark,
      unionid: unionid || '',
      nickname: nickname
    }
    setEditFakerUser(postData)
  }

  render() {
    const { selectUserStatus } = this.state
    const { robotAllowList, topicUser, robotManagementList } = this.props
    console.log(topicUser)

    return (
      <div className='robot-management-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="robot-management-content">
          <div className="publicBtn">增加昵称</div>
          <div className="admin-robots">
            <div className="topic-wrapper topic-wrapper-width">
              <div className="topic-top">
                <ul>
                  <li>机器人昵称</li>
                  <li>操作</li>
                  <li>设置关联用户</li>
                </ul>
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
                                  onClick={() => this.onSelectUserFn(item.nickname, item.uid)}
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
                            <a href="javascript:;">编辑</a>
                            <a className='red' href="javascript:;">删除</a>
                          </li>
                          <li className="selectUser">
                            <div
                              className="input"
                              onClick={() => this.setState({ selectUserStatus: !selectUserStatus })}
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
                <ul>
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
              <ul>
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
  getBotAllowList: data => {
    dispatch({
      type: 'GET_BOT_ALLOW_LIST',
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
})

const RobotManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotManagement)

export default RobotManagementProps
