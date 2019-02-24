import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import DialogBox from '../../../components/management/dialogBox'
import { connect } from "react-redux"
import { uploadQiniuFn, bktClouddnUrl } from "../../../api/upTokenApi"

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
      topicId: '', // 帖子ID
      selectUserStatus: false, // 显示/隐藏选择用户状态
      userVal: '', // 用户名字
      userUid: '', // 用户id
      userPage: 1, // 获取用户页数
      topicType: '', // 选择帖子类型
      topicTypeVal: '', // 帖子类别名字
      selectTopicTypeStatus: false, // 显示/隐藏选择帖子类型状态
      localCoverUrl: '', // 本地封面图URL
      localCoverObj: {},
      localContentUrls: [], // 本地内容图片URL
      fileLists: [],
      httpImgLists: [], // 网络内容图片URL
      titleVal: '', // 标题
      contentVal: '', // 内容
      PCUrl: '', // pc下的pdf链接
      H5Url: '', // H5下的pdf链接
      gistUrl: '', // gist地址
      single: false, // pdf是否连载/推送至公众号
      isPay: false, // 是否付费
      payVal: 0, // 付费金额
      editMoney: 0,
      optionLists: [{val: ''}, {val: ''}], // 投票选项
      newLabels: [],
      optionList: [],
      option_list: [],
      labelValue: [], // 已选中的关联标签
      dialogObj: {
        title: '帖子审核',
        content: '确认通过该帖子?'
      }
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { userPage } = this.state
    const { getUserList, getLabel, getUptoken, router } = this.props
    getUserList(userPage)
    getLabel()
    getUptoken()
    this.getTopicDetailFn(router.query.topicId)
    this.setState({
      topicId: router.query.topicId
    })
  }

  // 获取帖子详情
  getTopicDetailFn = (topicId) => {
    const { getTopicDetail } = this.props
    let topicType = ''
    if (topicId) getTopicDetail(topicId, (res) => {
      console.log(res)
      if (res.type === '纯文字') {
        topicType = '0'
      }
      if (res.type === '图文') {
        topicType = '1'
      }
      if (res.type === 'PDF') {
        topicType = '2'
      }
      if (res.type === '投票') {
        topicType = '3'
      }
      if (res.type === 'gist') {
        topicType = '4'
      }
      this.setState({
        userVal: res.user.nickname,
        topicType: topicType,
        topicTypeVal: res.type,
        localCoverUrl: res.cover,
        localContentUrls: res.imgList,
        titleVal: res.title,
        contentVal: res.content,
        option_list: res.option_list,
        PCUrl: res.pdfList.length ? res.pdfList[0].pdfUrl: '',
        H5Url: res.pdfList.length ? res.pdfList[1].pdfUrl: '',
        gistUrl: res.gist,
        option_list: res.option_list
      })
    })
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
      let newFileLists = this.state.fileLists
      const filesList = e.target.files
      for (let i = 0; i < filesList.length; i++) {
        if (this.state.localContentUrls.length < 9) {
          newContentImgArr.push({picUrl: window.URL.createObjectURL(filesList[i])}) // 本地图片路径
          newFileLists.push(filesList[i]) // 要传到七牛云的图片文件
          this.setState({
            localContentUrls: newContentImgArr,
            fileLists: newFileLists
          })
        } else {
          alert('最多只能上传9张喔～')
          return false
        }
      }
    }
  }

  // 移除内容图片
  onRemoveContentImgFn = (index) => {
    const { localContentUrls, fileLists } = this.state
    if (localContentUrls[index].picUrl.substr(0, 4) !== 'http') {
      fileLists.splice(index, 1)
      this.setState({
        fileLists: fileLists
      })
    }
    localContentUrls.splice(index, 1)
    this.setState({
      localContentUrls: localContentUrls
    })
  }

  // 上传PC-pdf
  uploadPCPdf = (e) => {
    const { uploadToke } = this.props
    let pdfList = e.target.files
    const objs = new FormData()
    objs.append('file', pdfList[0], pdfList[0].name)
    objs.append('token', uploadToke)
    uploadQiniuFn(objs).then(res => {
      const pdfUrl = bktClouddnUrl + res.data.hash
      this.setState({ PCUrl: pdfUrl })
    })
  }

  // 上传H5-pdf
  uploadH5Pdf = (e) => {
    const { uploadToke } = this.props
    let pdfList = e.target.files
    const objs = new FormData()
    objs.append('file', pdfList[0], pdfList[0].name)
    objs.append('token', uploadToke)
    uploadQiniuFn(objs).then(res => {
      const pdfUrl = bktClouddnUrl + res.data.hash
      this.setState({
        H5Url: pdfUrl
      })
    })
  }

  // 填写输入投票信息
  onChangeOptionFn = (e, index) => {
    const { optionLists } = this.state
    optionLists.map((item, i) => {
      if (index === i) {
        item.val = e.target.value
      }
    })
    this.setState({
      optionLists: optionLists
    })
  }

  // 添加投票选项
  onAddOptionsFn = () => {
    let newOptionLists = this.state.optionLists
    newOptionLists.push({val: ''})
    this.setState({
      optionLists: newOptionLists
    })
  }

  // 移除投票选项
  onDelOptionsFn = (index) => {
    let newOptionLists = this.state.optionLists
    if (newOptionLists.length > 1) {
      newOptionLists.splice(index, 1)
      this.setState({
        optionLists: newOptionLists
      })
    } else {
      alert('移除失败!')
    }
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

  // 发布帖子
  onPublishFn = () => {
    const {
      topicId,
      userVal,
      topicType,
      localCoverUrl,
      localContentUrls,
      titleVal,
      contentVal,
      optionLists,
      optionList,
      gistUrl,
      PCUrl,
      H5Url
    } = this.state
    const { labelList } = this.props
    if (!userVal) {
      alert('请选择用户')
      return false
    }
    if (!topicType) {
      alert('请选择帖子类型')
      return false
    }
    if (topicType === '1' || topicType === '2' || topicType === '4') {
      if (!localCoverUrl) {
        alert('封面不能为空!')
        return false
      }
    }
    if (topicType === '1' || topicType === '3' || topicType === '4') {
      if (!localContentUrls.length) {
        alert('内容图不能为空!')
        return false
      }
    }
    if (!titleVal) {
      alert('标题不能为空!')
      return false
    }
    if (!contentVal) {
      alert('帖子信息内容不能为空!')
      return false
    }
    if (topicType === '4' && !gistUrl) {
      alert('gist地址不能为空!')
      return false
    }
    if (topicType === '2') {
      if (!PCUrl || !H5Url) {
        alert('pdf链接不能为空!')
        return false
      }
    }

    this.setState({ optionList: [] })
    for (let i = 0; i < optionLists.length; i++) {
      let newOptionList = optionList
      if (optionLists[i].val) {
        if (optionList.indexOf(optionLists[i].val) === -1) {
          newOptionList.push(optionLists[i].val)
          this.setState({
            optionList: newOptionList
          })
        } else {
          alert('选项不能相同!')
          return false
        }
      }
    }
    if (!topicId && topicType === '3' && !optionList.length) {
      alert('请填写投票选项!')
      return false
    }

    const infoLabelList = labelList
    if (!topicId && infoLabelList.length) {
      for (let i = 0; i < infoLabelList.length; i++) {
        if (infoLabelList[i].mark) {
          this.setState({ labelValue: [] }, function () {
            this.labelSelectedFn(infoLabelList)
          })
          return true
        } else {
          if (i + 1 === labelList.length) {
            alert('请选择关联标签!')
            return false
          }
        }
      }
    } else {
      const { topicDetail } = this.props
      this.setState({
        newLabels: topicDetail.labelList
      }, function () {
        this.labelSelectedFn()
      })
    }
  }

  // push被选中的关联标签
  labelSelectedFn = (lists) => {
    let newLabelValue = this.state.labelValue
    if (lists) {
      lists.forEach((item) => {
        if (item.mark) {
          newLabelValue.push(item.label_title)
          this.setState({
            labelValue: newLabelValue
          })
        }
      })
    }
    // 检查封面图路径
    const { localCoverUrl, localCoverObj } = this.state
    const { uploadToke } = this.props
    if (localCoverUrl.substr(0, 4) !== 'http' && localCoverUrl !== '') {
      const params = new FormData()
      params.append('file', localCoverObj, localCoverObj.name)
      params.append('token', uploadToke)
      uploadQiniuFn(params).then((res) => {
        const imgUrl = bktClouddnUrl + res.data.hash
        this.setState({
          localCoverUrl: imgUrl
        })
        this.checkUploadListFn()
      })
    } else {
      this.checkUploadListFn()
    }
  }

  // 检查 uploadList
  checkUploadListFn = () => {
    const { topicId, localContentUrls, httpImgLists, fileLists } = this.state
    let newHttpImgLists = httpImgLists
    if (topicId) {
      for (let j = 0; j < localContentUrls.length; j++) {
        if (localContentUrls[j].picUrl.substr(0, 4) === 'http') {
          newHttpImgLists.push(localContentUrls[j].picUrl)
          this.setState({
            httpImgLists: newHttpImgLists
          })
        }
      }
      if (!fileLists.length) {
        this.toPublishFn()
        return false
      }
    }
    this.getUploadQiniuImgFn(fileLists, 0)
  }

  // 将本地内容图片转成网络图片
  getUploadQiniuImgFn = (list, i) => {
    const { httpImgLists } = this.state
    const { uploadToke } = this.props
    let newHttpImgLists = httpImgLists
    if (list.length) {
      const param = new FormData() // new一个对象
      param.append('file', list[i], list[i].name)
      param.append('token', uploadToke)
      uploadQiniuFn(param).then(res => {
        const imgUrl = bktClouddnUrl + res.data.hash
        newHttpImgLists.push(imgUrl)
        this.setState({
          httpImgLists: newHttpImgLists
        })
        if (i + 1 < list.length) {
          i = i + 1
          this.getUploadQiniuImgFn(list, i)
        } else {
          this.toPublishFn()
        }
      })
    } else {
      this.toPublishFn()
    }
  }

  toPublishFn () {
    const {
      topicId,
      userUid,
      topicType,
      titleVal,
      contentVal,
      localCoverUrl,
      httpImgLists,
      PCUrl,
      H5Url,
      gistUrl,
      single,
      isPay,
      payVal,
      editMoney,
      newLabels,
      optionList,
      option_list,
      labelValue
    } = this.state
    const { onPublishTopicFn, editTopicDetailFn } = this.props

    if (!topicId) {
      if (topicType === '2' || topicType === '3') {
        this.setState({
          isPay: false
        })
      }
      const postData = {
        unionid: userUid,
        type: topicType,
        title: titleVal,
        content: contentVal,
        first_img: localCoverUrl,
        images: httpImgLists,
        pdfs: [{ url: PCUrl, type: 'pc' }, { url: H5Url, type: 'wechat' }],
        gist_url: gistUrl,
        mark: single,
        tags: labelValue,
        pay: isPay,
        money: isPay ? payVal : 0,
        optionList: topicType === '3' ? optionList : []
      }
      onPublishTopicFn(postData)
    } else {
      const postData = {
        topic_id: topicId,
        title: titleVal,
        content: contentVal,
        cover: localCoverUrl,
        images: httpImgLists,
        pdfs: [{ url: PCUrl, type: 'pc' }, { url: H5Url, type: 'wechat' }],
        gist_url: gistUrl,
        money: editMoney,
        tags: newLabels,
        option_list: option_list
      }
      editTopicDetailFn(postData)
    }
  }

  // 对话弹框取消
  onCancelFn = () => {
    const { setDialogBoxStatusFn } = this.props
    setDialogBoxStatusFn(false)
  }

  // 对话弹框确认
  onOkFn = () => {
    const { setDialogBoxStatusFn } = this.props
    setDialogBoxStatusFn(false)
  }

  render() {
    const {
      topicId,
      selectUserStatus,
      userVal,
      selectTopicTypeStatus,
      topicTypeVal,
      topicType,
      localCoverUrl,
      localContentUrls,
      titleVal,
      contentVal,
      optionLists,
      PCUrl,
      H5Url,
      gistUrl,
      option_list,
      dialogObj
    } = this.state
    const { topicDetail, topicUser, labelList, setDialogBoxStatusFn } = this.props

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
                onClick={() => !topicId ? this.setState({ selectUserStatus: !selectUserStatus }) : null}
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
            <div className="form">
              <h3>选择帖子类型：</h3>
              <div
                className="select-bar"
                onClick={() => !topicId ? this.setState({ selectTopicTypeStatus: !selectTopicTypeStatus }) : null}
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
            {
              topicType !== '0' && topicType !== '2'
                ?
                <div className="form">
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
                :
                null
            }
          </div>
          <div className="topic-title-content-wrapper">
            <div className="form">
              <h3>输入标题：</h3>
              <div className="input-box">
                <input
                  type="text"
                  value={titleVal}
                  placeholder='Enter something...'
                  onChange={(e) => {
                    this.setState({ titleVal : e.target.value })
                  }}
                />
              </div>
            </div>
            <div className="form">
              <h3>输入内容：</h3>
              <div className="textarea-box">
                <textarea
                  value={contentVal}
                  placeholder="Enter something..."
                  onChange={(e) => {
                    this.setState({ contentVal : e.target.value })
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          {
            topicType === '2'
            ?
              <div className="pdf-wrapper">
                <div className="form">
                  <div className="pdf-form">
                    <h3>（PC）</h3>
                    <h3>输入pdf地址</h3>
                    <h3>or</h3>
                    <div className="select-pdf-btn">选择pdf文件
                      <input
                        type="file"
                        accept="application/pdf"
                        name="file"
                        onChange={(e) => this.uploadPCPdf(e)}
                      />
                    </div>
                  </div>
                  <input
                    className="pdf-form-input"
                    type="text"
                    value={PCUrl}
                    onChange={(e) => this.setState({ PCUrl: e.target.value })}
                  />
                </div>
                <div className="form">
                  <div className="pdf-form">
                    <h3>（H5）</h3>
                    <h3>输入pdf地址</h3>
                    <h3>or</h3>
                    <div className="select-pdf-btn">选择pdf文件
                      <input
                        type="file"
                        accept="application/pdf"
                        name="file"
                        onChange={(e) => this.uploadH5Pdf(e)}
                      />
                    </div>
                  </div>
                <input
                  className="pdf-form-input"
                  type="text"
                  value={H5Url}
                  onChange={(e) => this.setState({ H5Url: e.target.value })}
                />
                </div>
              </div>
              :
              null
          }
          {
            topicType === '4'
              ?
              <div className="pdf-wrapper">
                <div className="form">
                  <div className="pdf-form">
                    <h3>输入gist地址：</h3>
                  </div>
                  <input
                    className="pdf-form-input"
                    type="text"
                    value={gistUrl}
                    onChange={(e) => this.setState({ gistUrl: e.target.value })}
                  />
                </div>
              </div>
              :
              null
          }
          <div className="topic-label-wrapper">
            {
              !topicId && topicType === '3'
                ?
                <div className="vote-form-warp">
                  <h3>输入投票选项：</h3>
                  <div className="option-warpper">
                    {
                      optionLists.map((item, i) => {
                        return (
                          <div className="add-options" key={i}>
                            <img
                              src="http://chaomuqiniu.wegox.net/delete.png"
                              onClick={() => this.onDelOptionsFn(i)}
                            />
                            <input
                              value={item.val}
                              className="optionInput"
                              placeholder="选项"
                              onChange={(e) => this.onChangeOptionFn(e, i)}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="add-btn">
                    <img
                      src="http://chaomuqiniu.wegox.net/add.png"
                      onClick={() => this.onAddOptionsFn()}
                    />
                    <h4>添加选项</h4>
                  </div>
                </div>
                :
                topicId && topicType === '3'
                ?
                  <div className="vote-form-warp">
                    <h3>投票选择：</h3>
                    <div className="option-warpper">
                      {
                        option_list.length
                        ?
                          <ul>
                            {
                              option_list.map((item, i) => {
                                return (
                                  <li key={i}>{item.name}</li>
                                )
                              })
                            }
                          </ul>
                          :
                          null
                      }
                    </div>
                  </div>
                  :
                  null
            }
            {
              !topicId && topicType !== '2' && topicType !== '3'
              ?
                <div className="pay-form-warp">
                  <div className="pay-form">
                    <h3>是否需要付费：</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
                :
                null
            }
            {
              !topicId
              ?
                <div className="form">
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
                          <li>-暂无数据-</li>
                      }
                    </ul>
                  </div>
                </div>
                :
                <div className="form">
                  <h3>推荐标签：</h3>
                  <div className="selected-label">
                    <ul>
                      {
                        topicDetail
                        ?
                          topicDetail.labelList.length
                          ?
                            topicDetail.labelList.map((item, i) => {
                              return (
                                <li key={i}># {item}</li>
                              )
                            })
                            :
                            null
                          :
                          null
                      }
                    </ul>
                  </div>
                </div>
            }
          </div>
          <div className="release-wrapper">
            <div className="release-btn" onClick={() => this.onPublishFn()}>发布</div>
          </div>
          {
            topicId
            ?
              <div className="pass-btn-wrapper">
                <h3>帖子审核：</h3>
                <div
                  className="pass-btn"
                  onClick={() => {
                    this.setState({
                      dialogObj: {
                        title: '帖子审核',
                        content: '确认通过该帖子?'
                      }
                    }),
                    setDialogBoxStatusFn(true)
                  }}
                >通过</div>
                <div
                  className="pass-btn red"
                  onClick={() => {
                    this.setState({
                      dialogObj: {
                        title: '帖子审核',
                        content: '确认审核该帖子?'
                      }
                    }),
                    setDialogBoxStatusFn(true)
                  }}
                >不通过</div>
              </div>
              :
              null
          }
        </div>
        <DialogBox
          dialogObj={dialogObj}
          onOk={() => this.onOkFn()}
          onCancel={() => this.onCancelFn()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topicDetail: state.topicManagement.topicDetail,
  topicUser: state.topicManagement.topicUser,
  labelList: state.associationLabel.labelList,
  uploadToke: state.common.uploadToke
})

const mapDispatchToProps = dispatch => ({
  getTopicDetail: (topicId, callBack) => {
    dispatch({
      type: 'GET_TOPIC_DETAIL',
      topicId,
      callBack
    })
  },
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
  },
  getUptoken: data => {
    dispatch({
      type: 'GET_UP_TOKEN'
    })
  },
  onPublishTopicFn: data => {
    dispatch({
      type: 'SET_PUBLISH_TOPIC',
      data
    })
  },
  editTopicDetailFn: data => {
    dispatch({
      type: 'EDIT_TOPIC_DETAIL',
      data
    })
  },
  setDialogBoxStatusFn: dialogBoxStatus => {
    dispatch({
      type: 'DIALOG_BOX_STATUS',
      dialogBoxStatus
    })
  }
})

const TopicPublicProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPublic)

export default TopicPublicProps
