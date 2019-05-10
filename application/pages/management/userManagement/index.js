import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class UserManagement extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { getMemberList } = this.props
    getMemberList(1)
  }

  // 跳转创建用户
  onSkipUserManagementAdd = () => {
    Router.push('/management/userManagementAdd')
  }

  render() {
    const { memberList } = this.props

    return (
      <div className="user-management-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="user-management-content">
          <div className="add-type-wrapper">
            <div className="add-type" onClick={() => this.onSkipUserManagementAdd()}>创建用户</div>
          </div>
          <div className="topic-wrappers">
            <div className="topic-top">
              <ul>
                <li>头像</li>
                <li>昵称</li>
                <li>性别</li>
                <li>生日</li>
                <li>注册时间</li>
              </ul>
            </div>
            <div className="topic-main">
              {
                memberList.length
                  ? memberList.map((item, i) => (
                    <ul key={i}>
                      <li>
                        <img src={item.avatar} />
                      </li>
                      <li>{item.nickname}</li>
                      {
                        item.gender === 0 || item.gender === 1
                          ? <li>男</li>
                          : <li>女</li>
                      }
                      <li>{item.birthday}</li>
                      <li>{item.create_time}</li>
                    </ul>
                  ))
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
  memberList: state.userManagement.memberList,
})

const mapDispatchToProps = dispatch => ({
  getMemberList: page => {
    dispatch({
      type: 'GET_MEMBER_LIST',
      page,
    })
  },
})

const UserManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserManagement)

export default UserManagementProps
