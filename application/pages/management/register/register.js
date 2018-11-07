import React from 'react'

class ManagementRegister extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      path: '/management/login/login'
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
            <h2>注册</h2>
            <div className='input-wrapper'>
              <ul className='common-login'>
                <li>
                  <input type="email" placeholder='邮箱'/>
                </li>
                <li>
                  <input type="password" placeholder='6 - 16 位密码，区分大小写'/>
                </li>
                <li>
                  <input type="password" placeholder='确认密码'/>
                </li>
                <li>
                  <div className='area'>
                    <p>+ 86</p>
                    <i>
                      <img src='../../../static/img/ic_down.png'/>
                    </i>
                  </div>
                  <input type="number" placeholder='11 位手机号'/>
                </li>
                <li>
                  <input type="text" placeholder='输入验证码'/>
                  <span>获取验证码</span>
                </li>
              </ul>
            </div>
            <div className='register-text'>
              <div className='register-btn'>注册</div>
              <a href={this.state.path}>使用已有账户登录</a>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementRegister
