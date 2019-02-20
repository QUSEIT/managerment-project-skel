import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class RobotManagement extends React.Component {
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
              </div>
              <div className="topic-main">
                <ul>
                  <li>
                    <span>小言</span>
                  </li>
                  <li>
                    <a href="javascript:;">编辑</a>
                    <a className='red' href="javascript:;">删除</a>
                  </li>
                  <li className="selectUser">
                    <div className="input">请选择</div>
                  </li>
                </ul>
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
                  <li className="li">QTO</li>
                  <li className="li">QTO</li>
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
              <ul>
                <li className="li">小莫</li>
                <li className="li"><img src=''/></li>
                <li className="li">小莫</li>
                <li>
                  <a className='red' href="javascript:;">删除</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RobotManagement
