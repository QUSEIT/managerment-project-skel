import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

const management = '/management'

const navList = [
  {
    title: '帖子管理',
    status: false,
    path: management + '/topicManagement',
    childrenList: []
  },
  {
    title: '关联标签',
    status: false,
    path: management + '/associationLabel',
    childrenList: []
  },
  {
    title: '用户管理',
    status: false,
    path: management + '/userManagement',
    childrenList: []
  },
  {
    title: '关注配置',
    status: false,
    path: management + '/attentionConfiguration',
    childrenList: []
  },
  {
    title: '机器人配置',
    status: false,
    path: management,
    childrenList: [
      {
        title: '创建机器人',
        status: false,
        path: management + '/createRobot'
      },
      {
        title: '机器人管理',
        status: false,
        path: management + '/robotManagement'
      }
    ]
  },
  {
    title: '设置',
    status: false,
    path: management,
    childrenList: [
      {
        title: '后台用户管理',
        status: false,
        path: management + '/backstageUserManagement'
      },
      {
        title: '修改密码',
        status: false,
        path: management + '/Setting'
      },
      {
        title: '更多操作',
        status: false,
        path: management + '/moreOperating'
      },
    ]
  }
]

class LeftNav extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      navList: [],
      title: '卡片列表',
      listTitle: '列表页',
      miniNavStatus: false // mini导航状态
    }
  }

  // 将要加载页面之前
  componentWillMount = () => {
  }

  // 加载完成页面之后
  componentDidMount () {
    let str = window.location.href
    str = str.split('/')[str.split('/').length - 1]
    navList.forEach((e) => {
      if (e.childrenList.length) {
        e.childrenList.forEach((o) => {
          if (o.path === management + '/' + str) {
            console.log(o.title)
          }
        })
      } else {
        if (e.path === management + '/' + str) {
          console.log(e.title)
        }
      }
    })
    this.setState({
      navList: navList
    })
  }

  // 展开二级导航
  onExpandNavFn = (event, index) => {
    const { navList } = this.state
    navList.forEach((e, i) => {
      if (index === i) {
        if (e.childrenList.length) {
          e.status = !e.status
        } else {
          Router.push(e.path)
        }
      } else {
        e.status = false
      }
    })
    this.setState({
      navList: navList
    })
    event.stopPropagation()
  }

  // 跳转页面
  onSkipPageFn = (event, index, idx) => {
    const { navList } = this.state
    navList.forEach((e, i) => {
      e.childrenList.forEach((o, j) => {
        if (index === i && idx === j) {
          this.setState({
            miniNavStatus: false,
            listTitle: e.title,
            title: o.title
          })
          o.status = true
          Router.push(o.path)
        } else {
          o.status = false
        }
      })
    })
    this.setState({
      navList: navList
    })
    event.stopPropagation()
  }

  render() {
    const { leftNavStatus, onLeftNavMaskFn } = this.props

    return (
      <div
        className={leftNavStatus ? 'left-nav-mask left-nav-mask-active' : 'left-nav-mask'}
        onClick={() => {onLeftNavMaskFn(false)}}
      >
        <div className='left-nav-wrapper'>
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
                              <img src="/static/img/ic_down_f.png" />
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
                              >{o.title}</a>
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
    )
  }
}

const mapStateToProps = state => {
  return {
    leftNavStatus: state.common.leftNavStatus
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

const LeftNavProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNav)

export default LeftNavProps
