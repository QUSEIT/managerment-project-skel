import React from 'react'

class Login extends React.Component {
  render() {
    return (
        <div className='login-wrapper'>
          <div className='login-center'>
            <div className='logo'>
              <h1>logo</h1>
            </div>
            <div className='switch-login'>
              <ul>
                <li>账号密码登录</li>
                <li className='active'>手机号登录</li>
              </ul>
            </div>
            <div className='input-wrapper'>
              <ul>
                <li>
                  <input type="numbers" placeholder='手机号'/>
                </li>
                <li>
                  <input type="number" placeholder='验证码'/>
                  <span>获取验证码</span>
                </li>
              </ul>
            </div>
            <div className=''>
              <span>忘记密码</span>
            </div>
            <div className='submit-btn'>登录</div>
            <div className=''>
              <span>注册账户</span>
            </div>
          </div>
        </div>
    )
  }
}

export default Login
