import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class AttentionConfiguration extends React.Component {
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
      <div className='attention-configuration-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="attention-configuration-content">
          <div className="add-follower">
            <div className="form">
              <span>设置默认关注用户：</span>
              <p>请选择</p>
            </div>
            <div className="publicBtn">确定</div>
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
              <ul>
                <li>
                  <img src=''/>
                </li>
                <li>小莫</li>
                <li>2019-01-01</li>
                <li>2018-10-10</li>
                <li>
                  <a href="javascript:;">删除</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AttentionConfiguration
