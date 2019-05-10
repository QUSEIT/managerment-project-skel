import React from 'react'
import { connect } from 'react-redux'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class BackstageUserManagement extends React.Component {
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
    const { getAdminUserList } = this.props
    getAdminUserList()
  }

  render() {
    const { adminUserList } = this.props

    return (
      <div className="backstage-user-management-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="backstage-user-management-content">
          <div className="add-type-wrapper">
            <div className="add-type">添加管理员</div>
          </div>
          <div className="user-wrapper">
            <div className="user-top">
              <ul>
                <li className="li">用户名</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="user-main">
              {
                adminUserList.length
                  ? adminUserList.map((item, i) => (
                    <ul key={i}>
                      <li className="li">{item.username}</li>
                      <li>
                        <a>编辑</a>
                        <a className="a">删除</a>
                      </li>
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
  adminUserList: state.backstageUserManagement.adminUserList,
})

const mapDispatchToProps = dispatch => ({
  getAdminUserList: data => {
    dispatch({
      type: 'GET_ADMIN_USER_LIST',
    })
  },
})

const BackstageUserManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BackstageUserManagement)

export default BackstageUserManagementProps
