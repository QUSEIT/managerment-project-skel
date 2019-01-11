import React from 'react'
import AnalysePage from '../../../components/management/analysePage/analysePage'
import CardList from '../../../components/management/cardList/cardList'
import StandardList from '../../../components/management/standardList/standardList'
import StandardTable from '../../../components/management/standardTable/standardTable'
import BasicsForm from '../../../components/management/basicsForm/basicsForm'
import BasicsDetail from '../../../components/management/basicsDetail/basicsDetail'
import SubmitError from '../../../components/management/submitError/submitError'
import SubmitSuccess from '../../../components/management/submitSuccess/submitSuccess'
import Error403 from '../../../components/management/error403/error403'
import Error404 from '../../../components/management/error404/error404'
import Error500 from '../../../components/management/error500/error500'
import ChangePassword from '../../../pages/management/setting/changepassword'
import PostManager from '../../../pages/management/Post/postManager'
import AddPost from '../../../pages/management/Post/addPost'

class Page extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      navList: [],
      title: '卡片列表',
      listTitle: '列表页',
      componentBase: AddPost,
      miniNavStatus: false // mini导航状态
    }
  }
  // 将要加载页面之前
  componentWillMount = () => {
    const navList = [
      {
        title: '帖子管理',
        status: false,
        childrenList: []
      },
      {
        title: '关联标签',
        status: false,
        childrenList: [
          {
            name: '查询表格',
            status: false,
            component: StandardTable
          },
          {
            name: '标准列表',
            status: false,
            component: StandardList
          },
          {
            name: '卡片列表',
            status: false,
            component: CardList
          }
        ]
      },
      {
        title: '用户管理',
        status: false,
        childrenList: [
          {
            name: '基础表格',
            status: false,
            component: BasicsForm
          }
        ]
      },
      {
        title: '关注配置',
        status: false,
        childrenList: [
          {
            name: '基础详情',
            status: false,
            component: BasicsDetail
          }
        ]
      },
      {
        title: '机器人配置',
        status: false,
        childrenList: [
          {
            name: '创建机器人',
            status: false,
            component: SubmitError
          },
          {
            name: '机器人管理',
            status: false,
            component: SubmitSuccess
          }
        ]
      },
      {
        title: '设置',
        status: false,
        childrenList: [
          {
            name: '后台用户管理',
            status: false,
            component: Error403
          },
          {
            name: '修改密码',
            status: false,
            component: ChangePassword
          },
          {
            name: '500',
            status: false,
            component: Error500
          }
        ]
      }
    ]
    this.setState({
      navList: navList
    })
  }
  // 加载完成页面之后
  componentDidMount () {
  }
  // 展开二级导航
  onExpandNavFn = (event, index) => {
    this.state.navList.forEach((e, i) => {
      if (index === i) {
        e.status = !e.status
      } else {
        e.status = false
      }
    })
    this.setState({
      navList: this.state.navList
    })
    const that = this
    // 帖子管理
    if (index === 0) {
      that.setState({
        componentBase : PostManager
      })
    }

    event.stopPropagation()
  }
  // 跳转页面
  onSkipPageFn = (event, index, idx) => {
    const _this = this
    this.state.navList.forEach((e, i) => {
      e.childrenList.forEach((o, j) => {
        if (index === i && idx === j) {
          _this.setState({
            componentBase: o.component,
            miniNavStatus: false,
            listTitle: e.title,
            title: o.name
          })
          o.status = true
        } else {
          o.status = false
        }
      })
    })
    this.setState({
      navList: this.state.navList
    })
    event.stopPropagation()
  }

  render() {
    return(
        <div className='home-wrapper'>
          {/*topUserInfo*/}
          <div className='top-user-wrapper'>
            <div className='mini-nav'>
              <h1>logo</h1>
              <span onClick={() => {this.setState({miniNavStatus: true})}}>
                <img src='../static/img/mini-nav.png'/>
              </span>
            </div>
            <div className='top-user'>
              <h2>头像</h2>
              <span>用户名</span>
            </div>
            <div className='seek-icon'>
              <img src="../static/img/ic_search.png" />
            </div>
          </div>
          {/*leftNav*/}
          <div
              className={this.state.miniNavStatus ? 'nav-wrapper mini-nav-active' : 'nav-wrapper'}
              onClick={() => {this.setState({miniNavStatus: false})}}
          >
            <div className='nav-box'>
              <div className='nav-avatar'>
                <h1>logo</h1>
              </div>
              <div className='nav-list'>
                <ul>
                  {
                    this.state.navList.map((e, index) => {
                      return (
                          <li
                              key={index}
                              className={e.status ? 'active' : ''}
                              style={{height: e.status ? e.childrenList.length * 40 + 50 + 'px' : '50px'}}
                              onClick={(e) => {
                                this.onExpandNavFn(e, index)
                              }}
                          >
                            <div className='first-wrapper'>
                              <span>{e.title}</span> 
                              {
                                e.childrenList.length !== 0
                                ? 
                                <i>
                                  <img src="../static/img/ic_down_f.png" />
                                </i>
                                :
                                null
                              }
                            </div>
                            <div className='children-wrapper'>
                              {
                                e.childrenList.map((o, idx) => {
                                  return (
                                      <a
                                          href='javascript:;'
                                          key={idx}
                                          className={o.status ? 'active' : ''}
                                          onClick={(e) => {
                                            this.onSkipPageFn(e, index, idx)
                                          }}
                                      >{o.name}</a>
                                  )
                                })
                              }
                            </div>
                          </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          {/*mainWrapper*/}
          <div className='main'>
            {/*mainNav*/}
            <div className='main-nav'>
              <div className='main-nav-list'>
                <a href='javascript:;'>首页</a>
                <span>/</span>
                <a href='javascript:;'>{this.state.listTitle}</a>
                <span>/</span>
                <a href='javascript:;' className='active'>{this.state.title}</a>
              </div>
              <h3>{this.state.title}</h3>
            </div>
            {/*页面组件*/}
            <this.state.componentBase/>
          </div>
        </div>
    )
  }
}

export default Page
