import React from 'react'

class ManagementLogin extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      switchStatus: true,
      path: '/management/register/register'
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
        <div className='login-wrapper'>
          <div className='login-center'>
            <div className='logo'>
              <h1>logo</h1>
            </div>
            <div className='switch-login'>
              <ul>
                <li
                    className={this.state.switchStatus ? 'active' : null}
                    onClick={() => {this.setState({switchStatus: true})}}
                >
                  账号密码登录
                </li>
                <li
                    className={!this.state.switchStatus ? 'active' : null}
                    onClick={() => {this.setState({switchStatus: false})}}
                >
                  手机号登录
                </li>
              </ul>
            </div>
            <div className='input-wrapper'>
              {
                this.state.switchStatus
                  ?
                    <ul className='common-login'>
                      <li>
                        <input type="text" placeholder='账号'/>
                      </li>
                      <li>
                        <input type="text" placeholder='密码'/>
                      </li>
                      <li>
                        <input type="text" placeholder='验证码'/>
                        <span className='img'></span>
                      </li>
                    </ul>
                    :
                    <ul>
                      <li>
                        <input type="numbers" placeholder='手机号'/>
                      </li>
                      <li>
                        <input type="number" placeholder='验证码'/>
                        <span>获取验证码</span>
                      </li>
                    </ul>
              }
            </div>
            <div className='login-text'>
              <div className='auto-text'>
                <div className='check'></div>
                <span>自动登录</span>
              </div>
              <a href='#'>忘记密码</a>
            </div>
            <div className='submit-btn'>登录</div>
            <div className='login-text'>
              <a href={this.state.path}>注册账户</a>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementLogin
