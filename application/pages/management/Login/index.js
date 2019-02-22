import React from 'react'
import {connect} from "react-redux"

class Login extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      userName:'',
      password:''
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
  }

  // 跳转home页面
  onLogInSubmitFn = () => {
    const { userName, password } = this.state
    const { login } = this.props
    const data = { userName, password }
    login(data)
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
                <input
                  type="text"
                  placeholder='账号'
                  onChange={(e) => {
                    this.setState({ userName : e.target.value })
                  }}
                />
              </li>
              <li>
                <input
                  type="password"
                  placeholder='密码'
                  onChange={(e) => {
                    this.setState({ password : e.target.value })
                  }}
                />
              </li>
            </ul>
          </div>
          <div className='submit-btn' onClick={this.onLogInSubmitFn}>登录</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  login: data => {
    dispatch({
      type: 'LOGIN',
      data,
    })
  }
})

const LoginProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginProps
