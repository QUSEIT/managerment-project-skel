import React from 'react'

class Input extends React.Component {
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
        <div className='input-wrapper'>
          <input type={this.props.type} placeholder={this.props.placeholder}/>
        </div>
    )
  }
}

export default Input
