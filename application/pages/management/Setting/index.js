import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='setting-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className='main-container'>
          <ul>
            <li>
              <h4>旧密码：</h4>
              <div className='input-box'>
                <input type='password' placeholder='请输入原始密码' />
              </div>
            </li>
            <li>
              <h4>新密码：</h4>
              <div className='input-box'>
                <input type='password' placeholder='请输入新密码' />
              </div>
            </li>
            <li>
              <h4>确认密码：</h4>
              <div className='input-box'>
                <input type='password' placeholder='请再次输入新密码' />
              </div>
            </li>
          </ul>
          <div className='button-container'>
            <div className='button active'>提交</div>
            <div className='button'>重置</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Setting