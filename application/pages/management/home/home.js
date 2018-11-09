import React from 'react'
// import CardList from '../../../components/management/cardList/cardList'
// import StandardList from '../../../components/management/standardList/standardList'
import StandardTable from '../../../components/management/standardTable/standardTable'

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
          {/*topUserInfo*/}
          <div className='top-user-wrapper'>
            <div className='top-user'>
              <h1>头像</h1>
              <span>用户名</span>
            </div>
            <div className='seek-icon'>
              <img src="../../../static/img/ic_search.png" />
            </div>
          </div>
          {/*leftNav*/}
          <div className='nav-wrapper'>
            <div className='nav-avatar'>
              <h1>logo</h1>
            </div>
            <div className='nav-list'>
              <ul>
                <li>
                  <span>dashboard</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>表单也</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>列表页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>详情页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>结果页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
                <li>
                  <span>异常页</span>
                  <i>
                    <img src="../../../static/img/ic_down_f.png" />
                  </i>
                </li>
              </ul>
            </div>
          </div>
          {/*mainWrapper*/}
          <div className='main'>
            {/*mainNav*/}
            <div className='main-nav'>
              <div className='main-nav-list'>
                <a href='javascript:;'>首页</a>
                <span>/</span>
                <a href='javascript:;'>列表页</a>
                <span>/</span>
                <a href='javascript:;' className='active'>查询表格</a>
              </div>
              <h3>这个一个标题</h3>
            </div>
            {/*<CardList/>*/}
            {/*<StandardList/>*/}
            <StandardTable/>
          </div>
        </div>
    )
  }
}

export default ManagementIndex
