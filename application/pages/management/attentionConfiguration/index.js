import React from 'react'
import { connect } from 'react-redux'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class AttentionConfiguration extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      selectUserStatus: false,
      userVal: '',
      userPage: 1, // 获取用户页数
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { userPage } = this.state
    const { getUserList, getAttentionConfigurationUser } = this.props
    getUserList(userPage)
    getAttentionConfigurationUser()
  }

  // 选择用户
  onSelectUserFn = (name, id) => {
    this.setState({
      userVal: name,
      userId: id,
      selectUserStatus: false,
    })
  }

  // 获取上一批/下一批用户数据
  onSwiperFn = status => {
    const { userPage } = this.state
    const { topicUser, getUserList } = this.props
    const dataCount = Math.ceil(topicUser.data_count / 10)
    if (status && userPage > 1) {
      this.setState({
        userPage: userPage - 1,
      })
    } else if (status && userPage === 1) {
      return false
    }
    if (!status && userPage < dataCount) {
      this.setState({
        userPage: userPage + 1,
      })
    } else if (!status && userPage === dataCount) {
      return false
    }
    getUserList(this.state.userPage)
  }

  // 删除用户
  onDelectFn = (uid, mark) => {
    this.setState({
      userId: uid,
    }, () => {
      this.addFollowerFn(mark)
    })
  }

  // 添加默认关注用户
  addFollowerFn = mark => {
    const { userId } = this.state
    const { addDelAttentionConfigurationUser } = this.props
    if (!userId) {
      alert('请选择用户')
      return false
    }
    const oJson = {
      code: mark,
      id: userId,
    }
    addDelAttentionConfigurationUser(oJson)
  }

  render() {
    const { userVal, selectUserStatus } = this.state
    const { topicUser, attentionConfigurationUser } = this.props

    return (
      <div className="attention-configuration-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="attention-configuration-content">
          <div className="add-follower">
            <div className="form">
              <span>设置默认关注用户：</span>
              <div className="select-user">
                <p
                  onClick={() => this.setState({ selectUserStatus: !selectUserStatus })}
                >
                  {userVal || '请选择'}

                </p>
                {
                  selectUserStatus
                    ? (
                      <div className="user-wrapper">
                        <ul>
                          {
                            topicUser.data.length
                              ? topicUser.data.map((item, i) => (
                                <li
                                  key={i}
                                  onClick={() => this.onSelectUserFn(item.nickname, item.id)}
                                >
                                  {item.nickname}
                                </li>
                              ))
                              : null
                          }
                          <div className="user-footer">
                            <span
                              className="active"
                              onClick={() => this.onSwiperFn(true)}
                            >
                              上一批

                            </span>
                            <span
                              onClick={() => this.onSwiperFn(false)}
                            >
                              下一批

                            </span>
                          </div>
                        </ul>
                      </div>
                    )
                    : null
                }
              </div>
            </div>
            <div className="publicBtn" onClick={() => this.addFollowerFn(0)}>确定</div>
          </div>
          <div className="topic-wrappers">
            <div className="topic-top">
              <ul>
                <li>头像</li>
                <li>昵称</li>
                <li>生日</li>
                <li>注册时间</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="topic-main">
              {
                attentionConfigurationUser
                  ? attentionConfigurationUser.users
                    ? attentionConfigurationUser.users.map((item, i) => (
                      <ul key={i}>
                        <li>
                          <img src={item.avatar} />
                        </li>
                        <li>{item.nickname}</li>
                        <li>{item.birthday}</li>
                        <li>{item.create_time}</li>
                        <li>
                          <a
                            // href="javascript:;"
                            onClick={() => this.onDelectFn(item.id, 1)}
                          >
                            删除

                          </a>
                        </li>
                      </ul>
                    ))
                    : null
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicUser: state.topicManagement.topicUser,
  attentionConfigurationUser: state.attentionConfiguration.attentionConfigurationUser,
})

const mapDispatchToProps = dispatch => ({
  getUserList: data => {
    dispatch({
      type: 'GET_TOPIC_PUBLIC_USER',
      data,
    })
  },
  getAttentionConfigurationUser: data => {
    dispatch({
      type: 'GET_ATTENTION_CONFIGURATION_USER',
    })
  },
  addDelAttentionConfigurationUser: data => {
    dispatch({
      type: 'ADD_DEL_ATTENTION_CONFIGURATION_USER',
      data,
    })
  },
})

const AttentionConfigurationProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AttentionConfiguration)

export default AttentionConfigurationProps
