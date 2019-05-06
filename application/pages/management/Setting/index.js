import React from 'react'
import { connect } from 'react-redux'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class Setting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldpwd: '',
      password: '',
      confirmpwd: '',
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  // 提交form
  handleSubmit = () => {
    const { oldpwd, password, confirmpwd } = this.state
    const { onEditModifyPassword } = this.props
    if (!oldpwd) {
      alert('请输入旧密码!')
      return false
    }
    if (!password) {
      alert('请输入新密码!')
      return false
    }
    if (!confirmpwd) {
      alert('确认密码与新密码不一致!')
      return false
    }
    const data = {
      oldpwd,
      password,
      confirmpwd,
    }
    onEditModifyPassword(data)
  }

  // 重置表单
  onResetFormFn = () => {
    this.setState({
      oldpwd: '',
      password: '',
      confirmpwd: '',
    })
  }

  render() {
    const { oldpwd, password, confirmpwd } = this.state

    return (
      <div className="setting-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="main-container">
          <ul>
            <li>
              <h4>旧密码：</h4>
              <div className="input-box">
                <input
                  type="password"
                  value={oldpwd}
                  placeholder="请输入原始密码"
                  onChange={e => this.setState({ oldpwd: e.target.value })}
                />
              </div>
            </li>
            <li>
              <h4>新密码：</h4>
              <div className="input-box">
                <input
                  type="password"
                  value={password}
                  placeholder="请输入新密码"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
            </li>
            <li>
              <h4>确认密码：</h4>
              <div className="input-box">
                <input
                  type="password"
                  value={confirmpwd}
                  placeholder="请再次输入新密码"
                  onChange={e => this.setState({ confirmpwd: e.target.value })}
                />
              </div>
            </li>
          </ul>
          <div className="button-container">
            <div
              className="button active"
              onClick={() => this.handleSubmit()}
            >
              提交
            </div>
            <div
              className="button"
              onClick={() => this.onResetFormFn()}
            >
              重置
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onEditModifyPassword: data => {
    dispatch({
      type: 'EDIT_MODIFY_PASSWORD',
      data,
    })
  },
})

const SettingProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting)

export default SettingProps
