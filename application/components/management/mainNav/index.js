import React from 'react'

class MainNav extends React.Component {
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
    return (
      <div className='main-nav-wrapper'>
        <div className='main-nav-list'>
          <a href='javascript:;'>首页</a>
          <span>/</span>
          <a href='javascript:;'>aaa</a>
          <span>/</span>
          <a href='javascript:;' className='active'>bbb</a>
        </div>
        <h3>ccc</h3>
      </div>
    )
  }
}

export default MainNav