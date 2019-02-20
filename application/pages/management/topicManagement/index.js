import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import {connect} from "react-redux";
import topicManagement from "../../../store/reducers/topicManagement";

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
    const { getTopicList } = this.props
    const oJson = {
      selectTopicIdx: '',
      topicNavIdx: 1,
      pageLength: 1
    }
    getTopicList(oJson)
  }

  render() {
    const { topicList } = this.props

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
              {
                topicList.length
                  ?
                  topicList.map((item, i) => {
                    return (
                      <ul key={i}>
                        <li>{item.user.nickname}</li>
                        <li>
                          {
                            item.images.length
                              ?
                              <img src={item.images[0].picUrl}/>
                              :
                              null
                          }
                        </li>
                        <li>{item.content}</li>
                        <li>{item.thumb_count}</li>
                        <li>{item.star_count}</li>
                        <li>{item.create_time}</li>
                        <li>
                          <a href="javascript:;">删除</a>
                        </li>
                      </ul>
                    )
                  })
                  :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicList: state.topicManagement.topicList
})

const mapDispatchToProps = dispatch => ({
  getTopicList: data => {
    dispatch({
      type: 'GET_TOPIC_LIST',
      data
    })
  }
})

const TopicManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicManagement)

export default TopicManagementProps
