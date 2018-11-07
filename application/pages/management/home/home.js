import React from 'react'

class ManagementIndex extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
    }
  }
  // 将要加载页面之前
  componentWillMount () {
  }
  // 加载完成页面之后
  componentDidMount () {
  }

  render() {
    return (
        <div className='home-wrapper'>
          {/*leftNav*/}
          <div className='nav-wrapper'>
            <div className='nav-avatar'>
              <h1>logo</h1>
            </div>
            <div className='nav-list'>
              <ul>
                <li>
                  <span>dashboard</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>表单也</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>列表页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>详情页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>结果页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>异常页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
              </ul>
            </div>
          </div>
          {/*topUserInfo*/}
          <div className='top-user-wrapper'>

          </div>
        </div>
    )
  }
}

export default ManagementIndex
