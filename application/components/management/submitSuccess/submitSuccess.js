import React from 'react'

class ManagementSubmitSuccess extends React.Component {
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
        <div className='submit-success-wrapper'>
          <div className='submit-main'>
            <div className='submit-main-center'>
              <div className='submit-logo'>
                <h2>
                  <img src='../../../static/img/ic_submit-success.png'/>
                </h2>
              </div>
              <h3>提交成功</h3>
              <p>提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。本文字区域可以展示简单的补充说明，如果有类似展示“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。</p>
              <div className='progress-wrapper'>
                <h4>项目名称</h4>
                <div className='progress-title'>
                  <span className='span1'>项目ID：2017-01-10</span>
                  <span className='span2'>负责人：曲丽丽</span>
                  <span className='span3'>生效日期：201-01-11 ~ 201-01-30</span>
                </div>
                <ul>
                  <i className='i-active'></i>
                  <li className='li-active'></li>
                  <i className='i-active'></i>
                  <li></li>
                  <i></i>
                  <li></li>
                  <i></i>
                </ul>
                <div className='progress-list'>
                  <span className='active'>创建单据</span>
                  <span className='active'>部门初审</span>
                  <span className='span'>财务复审</span>
                  <span className='end'>完成</span>
                </div>
                <div className='progress-list progress-text'>
                  <span>曲丽丽</span>
                  <span>周某某</span>
                  <span className='span'></span>
                  <span className='end'></span>
                </div>
                <div className='progress-list progress-text'>
                  <span>2017-01-11</span>
                  <span>催一下</span>
                  <span className='span'></span>
                  <span className='end'></span>
                </div>
              </div>
              <div className='submit-btn'>
                <a href='javascript:;' className='active'>返回修改</a>
                <a href='javascript:;'>查看项目</a>
                <a href='javascript:;'>打印</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementSubmitSuccess
