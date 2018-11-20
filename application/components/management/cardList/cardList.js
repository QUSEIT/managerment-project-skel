import React from 'react'
import Select from '../../base/select'

class ManagementCardList extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      languageList: '',
      languageName: '',
      corporationList: '',
      corporationName: ''
    }
  }
  // 将要加载页面之前
  componentWillMount () {
    const languageList = [
      {
        value: 'java',
        label: 'java'
      },
      {
        value: 'python',
        label: 'python'
      },
      {
        value: 'php',
        label: 'php'
      },
      {
        value: 'javascript',
        label: 'javascript'
      },
      {
        value: 'html',
        label: 'html'
      },
      {
        value: 'css',
        label: 'css'
      }
    ]
    const corporationList = [
      {
        value: '阿里巴巴',
        label: '阿里巴巴'
      },
      {
        value: '腾讯',
        label: '腾讯'
      },
      {
        value: '百度',
        label: '百度'
      },
      {
        value: '小米',
        label: '小米'
      },
      {
        value: '饿了么',
        label: '饿了么'
      }
    ]
    this.setState({
      languageList: languageList,
      corporationList: corporationList
    })
  }
  // 加载完成页面之后
  componentDidMount () {
  }
  render() {
    return (
        <div className='card-list-wrapper'>
          <div className='card-nav'>
            <div className='card-nav-center'>
              <div className='type-wrapper'>
                <div className='type-title'>
                  <h5>所属类目：</h5>
                </div>
                <div className='type-list'>
                  <ul>
                    <li className='active'>全部</li>
                    <li>类目一</li>
                    <li>类目二</li>
                    <li>类目三</li>
                    <li>类目四</li>
                    <li>类目五</li>
                  </ul>
                </div>
              </div>
              <div className='select-wrapper'>
                <div className='select-title'>
                  <h5>其他选项：</h5>
                </div>
                <div className='select-text'>
                  <ul>
                    <li>
                      <h6>作&nbsp;&nbsp;&nbsp;者：</h6>
                      <div className='select-input'>
                        <Select list={this.state.languageList} value={this.state.languageName}/>
                      </div>
                    </li>
                    <li>
                      <h6>好评度：</h6>
                      <div className='select-input'>
                        <Select list={this.state.corporationList} value={this.state.corporationName}/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='card-main'>
            <ul>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className='li-list'>
                  <div className='list-img'>
                    <img src='http://pic.qiantucdn.com/58pic/11/40/01/35T58PICbki.jpg' />
                  </div>
                  <div className='list-text'>
                    <h3>我是标题</h3>
                    <p>一句话描述一句话描述</p>
                    <span>5 hours ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default ManagementCardList
