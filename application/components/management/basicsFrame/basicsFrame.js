import React from 'react'

class ManagementBasicsFrame extends React.Component {
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
        <div className='basics-frame-wrapper'>
          <div className='frame-main'>
            <div className='table-wrapper'>
              <ul>
                <div className='table-title'>
                  <span>标题</span>
                  <span>标题</span>
                  <span>标题</span>
                  <span>标题</span>
                </div>
                <li>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                </li>
                <li>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                </li>
                <li>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                </li>
                <li>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                  <span>我是内容我是内容</span>
                </li>
              </ul>
            </div>
            <div className='list-wrapper'>
              <ul>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                  <a href='javascript:;'>操作</a>
                </li>
                <li>
                  <span>加载更多...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementBasicsFrame
