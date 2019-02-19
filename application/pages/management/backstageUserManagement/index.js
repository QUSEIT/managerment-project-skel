import React from 'react'
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
  }

  render() {
    return (
      <div className='backstage-user-management-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
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
              <ul>
                <li className="li">小莫</li>
                <li>
                  <a href="javascript:;">编辑</a>
                  <a className="a" href="javascript:;">删除</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BackstageUserManagement
