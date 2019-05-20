import React, { Fragment } from 'react'
import {connect} from "react-redux";
import Router from 'next/router'
class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    const url = this.props;
    console.log(url)
  }

  render() {
    const { activeNavObj } = this.props;
    return (
      <div className='main-nav-wrapper'>
        <div className='main-nav-list'>
          <a href='javascript:;'>首页</a>
          <span>/</span>
          <a href='javascript:;'>{activeNavObj.oneTitle}</a>
          {
            activeNavObj.twoTitle
              ?
              <Fragment>
                <span>/</span>
                <a href='javascript:;'>{activeNavObj.twoTitle}</a>
              </Fragment>
              :
              null
          }
        </div>
        <h3>{activeNavObj.twoTitle || activeNavObj.oneTitle}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeNavObj: state.common.activeNavObj
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const MainNavProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav)

export default MainNavProps