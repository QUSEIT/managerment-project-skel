import React from 'react'

class ManagementIndex extends React.Component {
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
        <div className='home-wrapper'>
          {/*左侧导航栏*/}
          <div className='nav-wrapper'>
            <div className='nav-avatar'>
              <h1>logo</h1>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementIndex
