import React from 'react'
import Input from '../../base/input'
import Textarea from '../../base/textarea'

class ManagementBasicsForm extends React.Component {
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
        <div className='basics-form-wrapper'>
          <div className='form-main'>
            <ul>
              <li>
                <h4>标题：</h4>
                <div className='input-box'>
                  <Input type='text' placeholder='给目标起个名字'/>
                </div>
              </li>
              <li>
                <h4>起止时间：</h4>
                <div className='input-box'>
                  <Input type='text' placeholder='开始时间 － 结束时间'/>
                </div>
              </li>
              <li>
                <h4>目标描述：</h4>
                <div className='textarea-box'>
                  <Textarea placeholder='请输入你的阶段性工作目标'/>
                </div>
              </li>
              <li>
                <h4>衡量标准：</h4>
                <div className='textarea-box'>
                  <Textarea placeholder='请输入衡量标准'/>
                </div>
              </li>
              <li>
                <h4>客户（选填）①：</h4>
                <div className='input-box'>
                  <Input type="text" placeholder='请描述你服务的客户，内部客户直接 @姓名／工号'/>
                </div>
              </li>
              <li>
                <h4>邀评人（选填）：</h4>
                <div className='input-box'>
                  <Input type="text" placeholder='请直接 @姓名／工号，最多可邀请 5 人'/>
                </div>
              </li>
              <li>
                <h4>权重（选填）：</h4>
                <div className='input-span'>
                  <div className='input-number'>
                    <Input type="number" placeholder='0'/>
                  </div>
                  <span>%</span>
                </div>
              </li>
              <li>
                <h4>目标公开：</h4>
                <div className='select-wrapper'>
                  <div className='select-list'>
                    <div className='dot active'>
                      <i></i>
                    </div>
                    <p>公开</p>
                  </div>
                  <div className='select-list'>
                    <div className='dot'>
                      <i></i>
                    </div>
                    <p>部分公开</p>
                  </div>
                  <div className='select-list'>
                    <div className='dot'>
                      <i></i>
                    </div>
                    <p>不公开</p>
                  </div>
                </div>
              </li>
              <li>
                <h4></h4>
                <div className='input-box'>
                  <Input type="text" placeholder='请直接 @姓名／工号'/>
                </div>
              </li>
              <li>
                <h4></h4>
                <div className='input-span'>
                  <span>客户、邀评人默认被分享</span>
                </div>
              </li>
            </ul>
            <div className='submit-btn'>
              <a href='javascript:;' className='active'>提交</a>
              <a href='javascript:;'>保存</a>
              <a href='javascript:;'>删除</a>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementBasicsForm
