import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import { connect } from "react-redux"

class MoreOperating extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      forumTitle: '',
      editStatus: false
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { getForumTitle, getForumLogin } = this.props
    getForumTitle((res) => {
      this.setState({ forumTitle: res.title })
    })
    getForumLogin()
  }

  // 重置token
  onSetResetTokenFn = () => {
    const { setResetToken } = this.props
    setResetToken()
  }

  onCheckboxFn = () => {
    const { setForumLogin, forumLoginStatus } = this.props
    setForumLogin({ status: !forumLoginStatus })
  }

  render() {
    const { forumTitle, editStatus } = this.state
    const { forumLoginStatus } = this.props

    return (
      <div className='more-operating-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="more-operating-content">
          <div className="topic-nav">
            <div className="title-edit">
              <p>论坛title：</p>
              {
                editStatus
                ?
                  <input
                    type="text"
                    value={forumTitle} onChange={(e) => this.setState({ forumTitle: e.target.value })}
                  />
                  :
                  <p>{forumTitle}</p>
              }
            </div>
            {
              editStatus
              ?
                <a
                  href="javascript:;"
                  onClick={() => this.setState({ editStatus: false })}
                >保存</a>
                :
                <a
                  href="javascript:;"
                  onClick={() => this.setState({ editStatus: true })}
                >编辑</a>
            }
          </div>
          <div className="topic-nav">
            <p>非登录状态api不可调用</p>
            <label className="switch">
              <input type="checkbox" onChange={() => this.onCheckboxFn()} checked={forumLoginStatus} />
              <div className="slider round"></div>
            </label>
          </div>
          <div className="topic-nav">
            <p>如若出现 KeyError at /account/h5/login'expires_at' 错误的话请点击右方按钮重置</p>
            <div
              className="reset-btn"
              onClick={() => this.onSetResetTokenFn()}
            >重置</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  forumLoginStatus: state.moreOperating.forumLoginStatus
})

const mapDispatchToProps = dispatch => ({
  getForumTitle: (callBack) => {
    dispatch({
      type: 'GET_FORUM_TITLE',
      callBack
    })
  },
  getForumLogin: data => {
    dispatch({
      type: 'GET_FORUM_LOGIN'
    })
  },
  setForumLogin: status => {
    dispatch({
      type: 'SET_FORUM_LOGIN',
      status
    })
  },
  setResetToken: data => {
    dispatch({
      type: 'SET_RESET_TOKEN'
    })
  },
})

const MoreOperatingProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreOperating)

export default MoreOperatingProps
