import React from 'react'

class ManagementStandardList extends React.Component {
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
        <div className='standard-list-wrapper'>
          <div className='progress-wrapper'>
            <ul>
              <li>
                <span>我的待办</span>
                <h3>8个任务</h3>
              </li>
              <li>
                <span>本周任务平均处理时间</span>
                <h3>32分钟</h3>
              </li>
              <li>
                <span>本周完成任务数</span>
                <h3>24个任务</h3>
              </li>
            </ul>
          </div>
          <div className='standard-main'>
            <div className='standard-main-top'>
              <h3>XXX列表</h3>
              <div className='select-wrapper'>
                <ul>
                  <li className='active'>全部</li>
                  <li>进行中</li>
                  <li>等待中</li>
                </ul>
              </div>
              <div className='standard-input'>
                <input type="text" placeholder='请输入'/>
                <i>
                  <img src='../../../static/img/ic_search_gray.png' />
                </i>
              </div>
            </div>
            <div className='add-list-wrapper'>+ 添加</div>
            <div className='list-wrapper'>
              <ul>
                <li>
                  <div className='task-icon'>Task</div>
                  <div className='task-title'>
                    <h3>一个任务名称</h3>
                    <p>一段假想的简介，这是一段比较长的简介。</p>
                  </div>
                  <div className='task-owner'>
                    <span className='span'>Owner</span>
                    <span>曲丽丽</span>
                  </div>
                  <div className='task-time'>
                    <span className='span'>开始时间</span>
                    <span>2018-11-11 00:00</span>
                  </div>
                  <div className='task-progress'>
                    <div className='progress-box'>
                      <div className='progress'></div>
                    </div>
                    <span>50%</span>
                  </div>
                  <div className='task-more'>
                    <a href="javascript:;">编辑</a>
                    <span>|</span>
                    <a href="javascript:;">更多</a>
                  </div>
                </li>
                <li>
                  <div className='task-icon'>Task</div>
                  <div className='task-title'>
                    <h3>一个任务名称</h3>
                    <p>一段假想的简介，这是一段比较长的简介。</p>
                  </div>
                  <div className='task-owner'>
                    <span className='span'>Owner</span>
                    <span>曲丽丽</span>
                  </div>
                  <div className='task-time'>
                    <span className='span'>开始时间</span>
                    <span>2018-11-11 00:00</span>
                  </div>
                  <div className='task-progress'>
                    <div className='progress-box'>
                      <div className='progress'></div>
                    </div>
                    <span>50%</span>
                  </div>
                  <div className='task-more'>
                    <a href="javascript:;">编辑</a>
                    <span>|</span>
                    <a href="javascript:;">更多</a>
                  </div>
                </li>
                <li>
                  <div className='task-icon'>Task</div>
                  <div className='task-title'>
                    <h3>一个任务名称</h3>
                    <p>一段假想的简介，这是一段比较长的简介。</p>
                  </div>
                  <div className='task-owner'>
                    <span className='span'>Owner</span>
                    <span>曲丽丽</span>
                  </div>
                  <div className='task-time'>
                    <span className='span'>开始时间</span>
                    <span>2018-11-11 00:00</span>
                  </div>
                  <div className='task-progress'>
                    <div className='progress-box'>
                      <div className='progress progress-error'></div>
                    </div>
                    <i>
                      <img src='../../../static/img/ic_error.png'/>
                    </i>
                  </div>
                  <div className='task-more'>
                    <a href="javascript:;">编辑</a>
                    <span>|</span>
                    <a href="javascript:;">更多</a>
                  </div>
                </li>
                <li>
                  <div className='task-icon'>Task</div>
                  <div className='task-title'>
                    <h3>一个任务名称</h3>
                    <p>一段假想的简介，这是一段比较长的简介。</p>
                  </div>
                  <div className='task-owner'>
                    <span className='span'>Owner</span>
                    <span>曲丽丽</span>
                  </div>
                  <div className='task-time'>
                    <span className='span'>开始时间</span>
                    <span>2018-11-11 00:00</span>
                  </div>
                  <div className='task-progress'>
                    <div className='progress-box'>
                      <div className='progress'></div>
                    </div>
                    <i>
                      <img src='../../../static/img/ic_sucess.png'/>
                    </i>
                  </div>
                  <div className='task-more'>
                    <a href="javascript:;">编辑</a>
                    <span>|</span>
                    <a href="javascript:;">更多</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementStandardList
