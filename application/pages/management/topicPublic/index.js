import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import { connect } from "react-redux"

const topicTypeList = [
  {
    type: '0',
    value: '文字'
  },
  {
    type: '1',
    value: '图文'
  },
  {
    type: '2',
    value: 'pdf'
  },
  {
    type: '3',
    value: '投票'
  },
  {
    type: '4',
    value: 'gist'
  }
]

class TopicPublic extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      selectUserStatus: false, // 显示/隐藏选择用户状态
      userVal: '', // 用户名字
      userUid: '', // 用户id
      userPage: 1, // 获取用户页数
      topicType: 1, // 帖子类型
      selectTopicTypeStatus: false, // 显示/隐藏选择帖子类型状态
      topicTypeVal: '', // 帖子类别名字
      localCoverUrl: '', // 本地封面图URL
      localCoverObj: {},
      localContentUrls: [], // 内容图
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { userPage } = this.state
    const { getUserList, getLabel } = this.props
    getUserList(userPage)
    getLabel()
  }

  // 选择用户
  onSelectUserFn = (name, id) => {
    this.setState({
      userVal: name,
      userUid: id,
      selectUserStatus: false
    })
  }

  // 获取上一批/下一批用户数据
  onSwiperFn = (status) => {
    const { userPage } = this.state
    const { topicUser, getUserList } = this.props
    const dataCount = Math.ceil(topicUser.data_count / 10)
    if (status && userPage > 1) {
      this.setState({
        userPage: userPage - 1
      })
    } else {
      if (status && userPage === 1) {
        return false
      }
    }
    if (!status && userPage < dataCount) {
      this.setState({
        userPage: userPage + 1
      })
    } else {
      if (!status && userPage === dataCount) {
        return false
      }
    }
    getUserList(this.state.userPage)
  }

  // 选择帖子类型
  onSelectTopicTypeFn = (value, type) => {
    this.setState({
      topicTypeVal: value,
      topicType: type,
      selectTopicTypeStatus: false
    })
  }

  // 上传封面
  uploadFirstImg = (e) => {
    let firstImg = e.target.files
    this.setState({
      localCoverUrl: window.URL.createObjectURL(firstImg[0]),
      localCoverObj: firstImg[0]
    })
  }

  // 移除封面
  onRemoveCoverImgFn = () => {
    this.setState({
      localCoverUrl: '',
      localCoverObj: {}
    })
  }

  // 上传内容图片
  onUploadImgFn = (e) => {
    if (e) {
      let newContentImgArr = this.state.localContentUrls
      const filesList = e.target.files
      for (let i = 0; i < filesList.length; i++) {
        if (this.state.localContentUrls.length < 9) {
          newContentImgArr.push({picUrl: window.URL.createObjectURL(filesList[i])}) // 本地图片路径
          this.setState({
            localContentUrls: newContentImgArr
          })
          // this.localContentUrls.push({picUrl: window.URL.createObjectURL(filesList[i])}) // 本地图片路径
          // this.fileLists.push(filesList[i]) // 要传到七牛云的图片文件
        } else {
          alert('最多只能上传9张喔～')
          return false
        }
      }
    }
  }

  // 移除内容图片
  onRemoveContentImgFn = (index) => {
    const { localContentUrls } = this.state
    // if (localContentUrls[index].picUrl.substr(0, 4) !== 'http') {
    //   this.fileLists.splice(index, 1)
    // }
    localContentUrls.splice(index, 1)
    this.setState({
      localContentUrls: localContentUrls
    })
  }

  // 操作关联标签
  onSelectLabelFn = (labelId) => {
    const { labelList, modifyLabelList } = this.props
    labelList.forEach((item) => {
      if (item.label_id === labelId) {
        item.mark = !item.mark
      }
    })
    modifyLabelList([])
    modifyLabelList(labelList)
  }

  render() {
    const {
      selectUserStatus,
      userVal,
      selectTopicTypeStatus,
      topicTypeVal,
      topicType,
      localCoverUrl,
      localContentUrls
    } = this.state
    const { topicUser, labelList } = this.props

    return (
      <div className='topic-public-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="topic-public-content">
          <div className="topic-select-wrapper">
            <div className="form">
              <h3>选择用户：</h3>
              <div
                className="select-bar"
                onClick={() => this.setState({ selectUserStatus: !selectUserStatus })}
              >{userVal ? userVal : '请选择'}</div>
              {
                selectUserStatus
                  ?
                  <div className="user-wrapper">
                    <ul>
                      {
                        topicUser.data.length
                          ?
                          topicUser.data.map((item, i) => {
                            return (
                              <li
                                key={i}
                                onClick={() => this.onSelectUserFn(item.nickname, item.uid)}
                              >{item.nickname}</li>
                            )
                          })
                          :
                          null
                      }
                      <div className="user-footer">
                        <span
                          className="active"
                        onClick={() => this.onSwiperFn(true)}
                        >上一批</span>
                        <span
                          onClick={() => this.onSwiperFn(false)}
                        >下一批</span>
                      </div>
                    </ul>
                  </div>
                  :
                  null
              }
            </div>
            <div className="form form-right">
              <h3>选择帖子类型：</h3>
              <div
                className="select-bar"
                onClick={() => this.setState({ selectTopicTypeStatus: !selectTopicTypeStatus })}
              >{topicTypeVal ? topicTypeVal : '请选择'}</div>
              {
                selectTopicTypeStatus
                  ?
                  <div className="user-wrapper">
                    <ul>
                      {
                        topicTypeList.map((item, i) => {
                          return (
                            <li
                              key={i}
                              onClick={() => this.onSelectTopicTypeFn(item.value, item.type)}
                            >{item.value}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  :
                  null
              }
            </div>
          </div>
          <div className="topic-img-wrapper">
            {
              topicType !== '0' && topicType !== '3'
              ?
                <div className="form">
                  <h3>选择封面：</h3>
                  <div className="cover-wrapper">
                    {
                      localCoverUrl
                        ?
                        <div className="show-cover-img">
                          <div className="mask-box">
                            <i onClick={() => this.onRemoveCoverImgFn()}>
                              <img src="/static/img/remove-icon.png"/>
                            </i>
                          </div>
                          <img className="cover-img" src={localCoverUrl}/>
                        </div>
                        :
                        <div className="cover-upload">
                          <i>
                            <img src="/static/img/camera-icon.png" />
                          </i>
                          <input type="file" accept="image/*" name="file" onChange={(e) => this.uploadFirstImg(e)}/>
                        </div>
                    }
                  </div>
                </div>
                :
                null
            }
            <div className="form form-right">
              <h3>选择内容图：</h3>
              <div className="content-wrapper">
                <ul>
                  {
                    localContentUrls.length
                      ?
                      localContentUrls.map((item, i) => {
                        return (
                          <li key={i}>
                            <div className="mask-box">
                              <i onClick={() => this.onRemoveContentImgFn(i)}>
                                <img src="/static/img/remove-icon.png"/>
                              </i>
                            </div>
                            <img className="content-img" src={item.picUrl}/>
                          </li>
                        )
                      })
                      :
                      null
                  }
                  {
                    localContentUrls.length < 9
                      ?
                      <div className="upload-li">
                        <i>
                          <img src="/static/img/camera-icon.png" />
                        </i>
                        <input type="file" accept="image/*" name="file" multiple onChange={(e) => this.onUploadImgFn(e)}/>
                      </div>
                      :
                      null
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="topic-title-content-wrapper">
            <div className="form">
              <h3>输入标题：</h3>
              <div className="input-box">
                <input type="text" placeholder='Enter something...'/>
              </div>
            </div>
            <div className="form form-right">
              <h3>输入内容：</h3>
              <div className="textarea-box">
                <textarea placeholder="Enter something..."></textarea>
              </div>
            </div>
          </div>
          <div className="topic-label-wrapper">
            <div className="pay-form-warp">
              <div className="pay-form">
                <h3>是否需要付费：</h3>
                <label className="switch">
                  <input type="checkbox" />
                    <div className="slider round"></div>
                </label>
              </div>
            </div>
            <div className="form form-right">
              <h3>推荐标签：</h3>
              <div className="topic-type-select">
                <ul>
                  {
                    labelList.length
                     ?
                      labelList.map((item, i) => {
                        return (
                          <li
                            key={i}
                            className={item.mark ? 'active' : ''}
                            onClick={() => this.onSelectLabelFn(item.label_id)}
                          ># {item.label_title}</li>
                        )
                      })
                      :
                      null
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="release-wrapper">
            <div className="release-btn">发布</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicUser: state.topicManagement.topicUser,
  labelList: state.associationLabel.labelList
})

const mapDispatchToProps = dispatch => ({
  getUserList: (data) => {
    dispatch({
      type: 'GET_TOPIC_PUBLIC_USER',
      data
    })
  },
  getLabel: data => {
    dispatch({
      type: 'GET_ASSOCIATION_LABEL'
    })
  },
  modifyLabelList: labelList => {
    dispatch({
      type: 'ASSOCIATION_LABEL_LIST',
      labelList
    })
  }
})

const TopicPublicProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPublic)

export default TopicPublicProps
