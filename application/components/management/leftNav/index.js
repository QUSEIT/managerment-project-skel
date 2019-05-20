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
      navList: []
    }
  }

  // 将要加载页面之前
  componentWillMount = () => {
  }

  // 加载完成页面之后
  componentDidMount () {
    const { setActiveNavObjFn } = this.props
    let str = window.location.href
    str = str.split('/')[str.split('/').length - 1]
    navList.forEach((e) => {
      if (e.childrenList.length) {
        e.childrenList.forEach((o) => {
          if (o.path === management + '/' + str) {
            setActiveNavObjFn({ oneTitle: e.title, twoTitle: o.title})
          }
        })
      } else {
        if (e.path === management + '/' + str) {
          setActiveNavObjFn({ oneTitle: e.title, twoTitle: ''})
        }
      }
    })
    this.setState({
      navList: navList
    })
  }

  // 展开二级导航 || 跳转页面
  onSkipPageFn = (event, index, idx, oneTitle, twoTitle) => {
    const { navList } = this.state;
    const { onLeftNavMaskFn, setActiveNavObjFn } = this.props
    navList.forEach((e, i) => {
      if (index === i && e.childrenList.length) {
        if (idx || idx === 0) {
          e.childrenList.forEach((o, j) => {
            if (idx === j) {
              Router.push(o.path)
              onLeftNavMaskFn(false)
              setActiveNavObjFn({ oneTitle: oneTitle, twoTitle: twoTitle})
            } else {
              navList.forEach((item1, ii) => {
                item1.childrenList.forEach((item2, jj) => {
                  if (index === ii && idx === jj) {
                    item2.status = true
                  } else {
                    item2.status = false
                  }
                })
              })
            }
          })
        } else {
          e.status = !e.status
        }
      } else {
        e.status = false
        if (index === i) {
          Router.push(e.path)
          onLeftNavMaskFn(false)
          setActiveNavObjFn({ oneTitle: oneTitle, twoTitle: twoTitle})
        }
      }
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
            <img src="/static/img/nav-log.png"/>
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
                      onClick={(event) => {
                        this.onSkipPageFn(event, index, null, e.title, '')
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
                                onClick={(event) => {
                                  this.onSkipPageFn(event, index, idx, e.title, o.title)
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
    },
    setActiveNavObjFn: (activeNavObj) => {
      dispatch({
        type: 'ACTIVE_NAV_OBJ',
        activeNavObj
      })
    }
  }
}

const LeftNavProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNav)

export default LeftNavProps
