import React from 'react'
import { connect } from "react-redux"

class TopUserInfo extends React.Component {
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
    const { onLeftNavMaskFn } = this.props

    return (
      <div className='top-user-wrapper'>
        <div className='mini-nav'>
          <h1></h1>
          <span onClick={() => onLeftNavMaskFn(true)}>
            <img src='/static/img/mini-nav.png'/>
          </span>
        </div>
        <div className='top-user'>
          <h2></h2>
          <div className="triangle-wrapper">
            <span></span>
            <div className="out-btn">退出登录</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLeftNavMaskFn: (leftNavStatus) => {
      dispatch({
        type: 'LEFT_NAV_STATUS',
        leftNavStatus
      })
    }
  }
}

const TopUserInfoProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopUserInfo)

export default TopUserInfoProps