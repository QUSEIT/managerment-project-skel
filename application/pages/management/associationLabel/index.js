import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class AssociationLabel extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
  }

  render() {
    return (
      <div className='association-label-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="association-label-main">
          <div className="add-type-wrapper">
            <div className="add-type">添加标签</div>
          </div>
          {/*添加贴子分类*/}
          <div className="label-wrapper">
            <div className="topic-top">
              <ul>
                <li className="li">名字</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="topic-main">
              <ul>
              <li className="li"># 好多标签</li>
              <li>
                <a href="javascript:;">编辑</a>
                <a className="a" href="javascript:;">删除</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AssociationLabel
