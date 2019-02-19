import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class MoreOperating extends React.Component {
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
      <div className='more-operating-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="more-operating-content">
          <div className="topic-nav">
            <div className="title-edit">
              <p>论坛title：</p>
              <p>QPYIO</p>
            </div>
            <a>编辑</a>
          </div>
          <div className="topic-nav">
            <p>非登录状态api不可调用</p>
          </div>
          <div className="topic-nav">
            <p>如若出现 KeyError at /account/h5/login'expires_at' 错误的话请点击右方按钮重置</p>
            <div className="reset-btn">重置</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoreOperating
