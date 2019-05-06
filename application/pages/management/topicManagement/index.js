import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import DialogBox from '../../../components/management/dialogBox'

const topicStatusList = [
  {
    name: '未审核',
    id: 0,
  },
  {
    name: '审核通过',
    id: 1,
  },
  {
    name: '审核不通过',
    id: 2,
  },
];

class TopicManagement extends React.Component {
  // 状态机
  constructor(props) {
    super(props);
    this.state = {
      topicId: '',
      topicStatusId: 0,
      topicTypeId: '',
      dialogObj: {
        title: '',
        content: '',
      },
    };
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { topicStatusId, topicTypeId } = this.state;
    const { getTopicTypeList } = this.props;
    this._getTopicListFn(topicStatusId, topicTypeId);
    getTopicTypeList();
  }

  // 选择帖子状态
  onTopicStatusFn = id => {
    this.setState({
      topicStatusId: id,
    }, () => {
      const { topicStatusId, topicTypeId } = this.state;
      this._getTopicListFn(topicStatusId, topicTypeId);
    });
  }

  // 选择帖子类型
  onTopicTypeFn = id => {
    this.setState({
      topicTypeId: id,
    }, () => {
      const { topicStatusId, topicTypeId } = this.state;
      this._getTopicListFn(topicStatusId, topicTypeId);
    });
  }

  // 获取帖子列表
  _getTopicListFn = (topicStatusId, topicTypeId) => {
    const { getTopicList } = this.props;
    const oJson = {
      topicStatusId,
      topicTypeId,
      pageLength: 1,
    };
    getTopicList(oJson);
  }

  // 删除帖子
  onDelTopicFn = (e, topicId) => {
    const { setDialogBoxStatusFn } = this.props;
    this.setState({
      topicId,
      dialogObj: {
        title: '是否移除该帖子!',
        content: '注意一旦移除就无法找回来了!',
      },
    });
    setDialogBoxStatusFn(true);
    e.stopPropagation();
  }

  // 跳转TopicPublic页面
  onSkipTopicPublicFn = topicId => {
    Router.push(`/management/topicPublic?topicId=${topicId}`);
  }

  // 对话弹框取消
  onCancelFn = () => {
    const { setDialogBoxStatusFn } = this.props;
    setDialogBoxStatusFn(false);
  }

  // 对话弹框确认
  onOkFn = () => {
    const { topicId, topicStatusId, topicTypeId } = this.state;
    const { onDelTopic, setDialogBoxStatusFn } = this.props;
    onDelTopic(topicId, () => {
      this._getTopicListFn(topicStatusId, topicTypeId);
      alert('移除成功');
    });
    setDialogBoxStatusFn(false);
  }

  render() {
    const { topicStatusId, topicTypeId, dialogObj } = this.state;
    const { topicList, topicTypeList } = this.props;

    return (
      <div className="topic-management-wrapper">
        {/* TopUserInfo */}
        <TopUserInfo />
        {/* MainNav */}
        <MainNav />
        <div className="topic-main">
          <div className="topic-nav">
            <ul>
              {
                topicStatusList.map((item, i) => (
                  <li
                    key={i}
                    className={topicStatusId === item.id ? 'active' : ''}
                    onClick={() => this.onTopicStatusFn(item.id)}
                  >
                    {item.name}
                  </li>
                ))
              }
            </ul>
            <div className="add-type" onClick={() => this.onSkipTopicPublicFn('')}>添加帖子</div>
          </div>
          {/* 帖子分类 */}
          <div className="topic-select">
            <ul>
              <li
                className={topicTypeId === '' ? 'active' : ''}
                onClick={() => this.onTopicTypeFn('')}
              >
                全部
                
              </li>
              {
                topicTypeList.length
                  ? topicTypeList.map((item, i) => (
                    <li
                      key={i}
                      className={topicTypeId === item.id ? 'active' : ''}
                      onClick={() => this.onTopicTypeFn(item.id)}
                    >
                      {item.name}

                    </li>
                  ))
                  : null
              }
            </ul>
          </div>
          {/* 帖子列表 */}
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
                  ? topicList.map((item, i) => (
                    <ul key={i} onClick={() => this.onSkipTopicPublicFn(item.topic_id)}>
                      <li>{item.user.nickname}</li>
                      <li>
                        {
                          item.images.length
                            ? <img src={item.images[0].picUrl} />
                            : null
                        }
                      </li>
                      <li>{item.content}</li>
                      <li>{item.thumb_count}</li>
                      <li>{item.star_count}</li>
                      <li>{item.create_time}</li>
                      <li>
                        <a
                          // href="javascript:;"
                          onClick={e => this.onDelTopicFn(e, item.topic_id)}
                        >
                          删除
                          
                        </a>
                      </li>
                    </ul>
                  ))
                  : null
              }
            </div>
          </div>
        </div>
        {/* 对话框 */}
        <DialogBox
          dialogObj={dialogObj}
          onOk={() => this.onOkFn()}
          onCancel={() => this.onCancelFn()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topicList: state.topicManagement.topicList,
  topicTypeList: state.topicManagement.topicTypeList,
});

const mapDispatchToProps = dispatch => ({
  getTopicList: data => {
    dispatch({
      type: 'GET_TOPIC_LIST',
      data,
    });
  },
  getTopicTypeList: () => {
    dispatch({
      type: 'GET_TOPIC_TYPE_LIST',
    });
  },
  onDelTopic: (topicId, callBack) => {
    dispatch({
      type: 'DEL_TOPIC',
      topicId,
      callBack,
    });
  },
  setDialogBoxStatusFn: dialogBoxStatus => {
    dispatch({
      type: 'DIALOG_BOX_STATUS',
      dialogBoxStatus,
    });
  },
});

const TopicManagementProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicManagement);

export default TopicManagementProps;
