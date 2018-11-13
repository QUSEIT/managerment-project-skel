import React from 'react'

class ManagementUnusualError extends React.Component {
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
        <div className='unusual-error-wrapper'>
          <h3>500</h3>
          <p>抱歉，服务器出错了</p>
          <div className='btn'>
            <a href='javascript:;'>返回首页</a>
          </div>
        </div>
    )
  }
}

export default ManagementUnusualError
