import React from 'react'
import Router from 'next/router'
import {postRequest, ERR_OK} from '../utils/apiRequest'
import { log } from 'util';

class ManagementLogin extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      params : {},
      result:{},
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
    // Router.push('/management/home/home')
    const params = {
      account : this.state.accountValue,
      password : this.state.pwdValue
    }

    postRequest('manager/login', params).then((res) => {
      if (res.errno === ERR_OK) {
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
      } else {
        console.log('报错')
      }
    })
    
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
                onClick={() => { this.setState({ switchStatus: true }) }}
              >
                账号密码登录
                </li>
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
          <div className='login-text'>
            {/* <div className='auto-text'>
              <div className='check'></div>
              <span>自动登录</span>
            </div>
            <a href='#'>忘记密码</a> */}
          </div>
          <div className='submit-btn' onClick={this.onSkipHomeFn}>登录</div>
        </div>
      </div>
    )
  }
}

export default ManagementLogin
