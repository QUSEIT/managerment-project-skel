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
          <h1>logo</h1>
          <span onClick={() => onLeftNavMaskFn(true)}>
            <img src='/static/img/mini-nav.png'/>
          </span>
        </div>
        <div className='top-user'>
          <h2>头像</h2>
          <span>用户名</span>
        </div>
        <div className='seek-icon'>
          <img src="/static/img/ic_search.png" />
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