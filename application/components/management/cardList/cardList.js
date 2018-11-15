import React from 'react'

class ManagementCardList extends React.Component {
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
                      <span>作&nbsp;&nbsp;&nbsp;者：</span>
                      <div className='select-input'>
                        <span>不限</span>
                        <i>
                          <img src='../../../static/img/ic_down.png'/>
                        </i>
                      </div>
                    </li>
                    <li>
                      <span>好评度：</span>
                      <div className='select-input'>
                        <span>不限</span>
                        <i>
                          <img src='../../../static/img/ic_down.png'/>
                        </i>
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
