import React from 'react'
import Button from '../../base/button'
import Input from '../../base/input'

class ManagementStandardTable extends React.Component {
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
        <div className='standard-table-wrapper'>
          <div className='standard-table-main'>
            <div className='table-select-wrapper'>
              <div className='table-select'>
                <span>规则编号：</span>
                <div className='input-box'>
                  <Input type="text" placeholder='请输入'/>
                </div>
              </div>
              <div className='table-select'>
                <span>请&nbsp;&nbsp;选&nbsp;择：</span>
                <div className='table-select-box'>
                  <span>请选择</span>
                  <i>
                    <img src='../../../static/img/ic_down.png'/>
                  </i>
                </div>
              </div>
              <div className='select-btn'>
                <ul>
                  <li>
                    <Button type='primary' name='查询'/>
                  </li>
                  <li>
                    <Button type='minor' name='重置'/>
                  </li>
                </ul>
              </div>
            </div>
            <div className='operate-wrapper'>
              <ul>
                <li className='active'>
                  <span>+ 新建</span>
                </li>
                <li>
                  <span>批量操作</span>
                </li>
                <li>
                  <span>更多操作</span>
                  <i>
                    <img src='../../../static/img/ic_down.png'/>
                  </i>
                </li>
              </ul>
            </div>
            <div className='display-select'>
              <i>i</i>
              <div className='display-list'>
                <span>已选择</span>
                <span className='active'>4</span>
                <span>项</span>
              </div>
              <div className='display-list'>
                <span>已选择</span>
                <span className='num'>36.4 万</span>
              </div>
              <a href='javascript:;'>清空</a>
            </div>
            <div className='table-main'>
              <div className='table-title'>
                <div className='table-status'>-</div>
                <h4 className='number'>规则编号</h4>
                <h4 className='describe'>描述</h4>
                <h4 className='service-num'>
                  <span>服务调用次数</span>
                  <i>
                    <img src='../../../static/img/ic_sort.png' />
                  </i>
                </h4>
                <h4 className='status'>
                  <span>状态</span>
                  <i>
                    <img src='../../../static/img/ic_filter.png'/>
                  </i>
                </h4>
                <h4 className='time'>
                  <span>更新时间</span>
                  <i>
                    <img src='../../../static/img/ic_sort_up.png'/>
                  </i>
                </h4>
                <h4 className='operate'>操作</h4>
              </div>
              <ul>
                <li>
                  <div className='table-status'></div>
                  <h4 className='number'>TradeCode 0</h4>
                  <h4 className='describe'>这是一段描述，关于这个应用的描述文字内容</h4>
                  <h4 className='service-num'>357万</h4>
                  <h4 className='status'>
                    <i></i>
                    <span>关闭</span>
                  </h4>
                  <h4 className='time'>2017-10-31  23:12:00</h4>
                  <h4 className='operate'>
                    <a href='javascript:;'>配置</a>
                    <span>|</span>
                    <a href='javascript:;'>订阅警报</a>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementStandardTable
