import React from 'react'

class ManagementSubmitError extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
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
        <div className='submit-error-wrapper'>
          <div className='submit-main'>
            <div className='submit-main-center'>
              <div className='submit-logo'>
                <h2>
                  <img src='../../../static/img/ic_submit-error.png'/>
                </h2>
              </div>
              <h3>提交失败</h3>
              <p>请核对并修改以下信息后，再重新提交。</p>
              <div className='progress-wrapper'>
                <h4>项目名称</h4>
                <div className='error-hint'>
                  <ul>
                    <li>
                      <i>
                        <img src='../../../static/img/ic_close.png'/>
                      </i>
                      <span>你的账户已被冻结</span>
                      <a href='javascript:;'>立即解冻 ></a>
                    </li>
                    <li>
                      <i>
                        <img src='../../../static/img/ic_close.png'/>
                      </i>
                      <span>你的账户还不具备申请资格</span>
                      <a href='javascript:;'>立即解冻 ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='submit-btn'>
                <a href='javascript:;' className='active'>返回修改</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementSubmitError
