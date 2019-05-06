import React from 'react'
import { connect } from 'react-redux'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import { uploadQiniuFn, bktClouddnUrl } from '../../../api/upTokenApi'

class UserManagementAdd extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      localAvatarUrl: '',
      avatarFirstObj: {},
      nickname: '',
      sex: '0',
    }
  }

  // 将要加载页面之前
  componentWillMount() {

  }

  // 加载完成页面之后
  componentDidMount() {
    const { getUptoken } = this.props
    getUptoken()
  }

  // 上传头像
  uploadFirstImg = e => {
    let firstImg = e.target.files
    this.setState({
      localAvatarUrl: window.URL.createObjectURL(firstImg[0]),
      avatarFirstObj: firstImg[0],
    })
  }

  // 提交信息
  onPubFn = () => {
    const { localAvatarUrl, avatarFirstObj, nickname, sex } = this.state
    const { uploadToke } = this.props
    if (!localAvatarUrl) {
      alert('请选择头像')
      return false
    }
    if (!nickname) {
      alert('请输入昵称')
      return false
    }
    if (!sex) {
      alert('请选择性别!')
      return false
    }
    const params = new FormData()
    params.append('file', avatarFirstObj, avatarFirstObj.name)
    params.append('token', uploadToke)
    uploadQiniuFn(params).then(res => {
      const imgUrl = bktClouddnUrl + res.data.hash
      this.setState({
        localAvatarUrl: imgUrl,
      })
      this.onPublishFn()
    })
  }

  onPublishFn() {
    const { localAvatarUrl, nickname, sex } = this.state
    const { onAddUser } = this.props
    const oJson = {
      avatar: localAvatarUrl,
      nickname,
      gender: sex,
    }
    onAddUser(oJson)
  }

  render() {
    const { localAvatarUrl, nickname } = this.state

    return (
      <div className="user-management-add-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="form-warp">
          <h3>选择头像</h3>
          <div className="upload-wrapper">
            {
              localAvatarUrl
                ? (
                  <div className="avatar">
                    <img src={localAvatarUrl} />
                  </div>
                )
                : (
                  <div className="upload-input">
                    <i>
                      <img src="/static/img/camera-icon.png" />
                    </i>
                    <input
                      type="file"
                      accept="image/*"
                      name="file"
                      onChange={e => this.uploadFirstImg(e)}
                    />
                  </div>
                )
            }
          </div>
          <h3>输入昵称</h3>
          <div className="name-wrapper">
            <input
              type="text"
              value={nickname}
              placeholder="Enter something..."
              onChange={e => this.setState({ nickname: e.target.value })}
            />
          </div>
          <h3>选择性别</h3>
          <div className="sex-wrapper">
            <select onChange={e => this.setState({ sex: e.target.value })}>
              <option value="0">男</option>
              <option value="1">女</option>
            </select>
          </div>
          <div className="publicBtn" onClick={() => this.onPubFn()}>确定</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  uploadToke: state.common.uploadToke,
})

const mapDispatchToProps = dispatch => ({
  getUptoken: data => {
    dispatch({
      type: 'GET_UP_TOKEN',
    })
  },
  onAddUser: data => {
    dispatch({
      type: 'ADD_USER_MANAGEMENT',
      data,
    })
  },
})

const UserManagementAddProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserManagementAdd)

export default UserManagementAddProps
