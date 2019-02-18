import React from 'react'
import Router from 'next/router'

class Login extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      accountValue:'',
      pwdValue:''
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
  }

  // 监听获取账号输入值
  handleAccountInputValue = (event) => {
    this.setState({
      accountValue : event.target.value
    })
  }

  handlePasswordInputValue = (event) => {
    this.setState({
      pwdValue : event.target.value
    })
  }

  // 跳转home页面
  onSkipHomeFn = () => {
    Router.push('/management/Setting')
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
              <li>账号密码登录</li>
            </ul>
          </div>
          <div className='input-wrapper'>
            <ul className='common-login'>
              <li>
                <input type="text" placeholder='账号' onChange={this.handleAccountInputValue}/>
              </li>
              <li>
                <input type="password" placeholder='密码' onChange={this.handlePasswordInputValue}/>
              </li>
            </ul>
          </div>
          <div className='submit-btn' onClick={this.onSkipHomeFn}>登录</div>
        </div>
      </div>
    )
  }
}

export default Login
