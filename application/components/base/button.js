import React from 'react'

class Button extends React.Component {
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
        <div className='button-wrapper'>
          <button className={this.props.type} onClick={this.props.clickEvent}>{this.props.name}</button>
        </div>
    )
  }
}

export default Button
