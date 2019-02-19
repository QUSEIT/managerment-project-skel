import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class CreateRobot extends React.Component {
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
      <div className='create-robot-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="robot-page">
          <div className="publicBtn">生成二维码</div>
          <div className="topic-wrappers">
            <div className="topic-top">
              <ul>
                <li className="li">机器人昵称</li>
                <li>状态</li>
              </ul>
            </div>
            <div className="topic-main">
              <ul>
                <li className="li">小莫</li>
                <li>
                  <a href="javascript:;">Running</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateRobot
