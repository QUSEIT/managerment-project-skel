import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'

class TopicManagement extends React.Component {
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
      <div className='topic-management-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="topic-main">
          <div className="topic-nav">
            <ul>
              <li className="active">未审核</li>
              <li>审核通过</li>
              <li>审核不通过</li>
            </ul>
            <div className="add-type">添加帖子</div>
          </div>
          {/*帖子分类*/}
          <div className="topic-select">
            <ul>
              <li className="active">全部</li>
              <li>纯文字</li>
            </ul>
          </div>
          {/*帖子列表*/}
          <div className="topic-wrappers">
            <div className="topic-top">
              <ul>
                <li>名字</li>
                <li>图片</li>
                <li>内容</li>
                <li>点赞数</li>
                <li>收藏数</li>
                <li>发布时间</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="topic-main">
              <ul>
                <li>未知</li>
                <li>
                  <img src=''/>
                </li>
                <li>无</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>
                  <a href="javascript:;">删除</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopicManagement
