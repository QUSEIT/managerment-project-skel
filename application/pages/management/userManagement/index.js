import React from 'react'
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
  }

  render() {
    return (
      <div className='user-management-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="user-management-content">
          <div className="add-type-wrapper">
            <div className="add-type">创建用户</div>
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
              <ul>
                <li>
                  <img src=''/>
                </li>
                <li>小莫</li>
                {/*<li>男</li>*/}
                <li>女</li>
                <li>2019-01-25</li>
                <li>2019-01-30 10:22</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserManagement
