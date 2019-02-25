import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import DialogBox from '../../../components/management/dialogBox'
import InputDialogBox from '../../../components/management/inputDialogBox'
import { connect } from "react-redux"

class AssociationLabel extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
      labelObj: {
        labelId: '',
        title: '',
        status: 0
      },
      dialogObj: {
        title: '',
        content: ''
      },
      labelValue: ''
    }
  }

  // 将要加载页面之前
  componentWillMount() {
  }

  // 加载完成页面之后
  componentDidMount() {
    const { getAssociationLabel } = this.props
    // 获取标签列表
    getAssociationLabel()
  }

  // 删除标签
  onDelLabelFn = (labelId, title, status) => {
    const { setDialogBoxStatusFn } = this.props
    this.setState({
      labelObj: {
        labelId: labelId,
        title: title,
        status: status
      },
      dialogObj: {
        title: '是否移除该标签!',
        content: '注意一旦移除就无法找回来了!'
      }
    })
    setDialogBoxStatusFn(true)
  }

  // 对话弹框取消
  onCancelFn = () => {
    const { setDialogBoxStatusFn } = this.props
    setDialogBoxStatusFn(false)
  }

  // 对话弹框确认
  onOkFn = () => {
    const { labelObj } = this.state
    const { onDelEditAddLabel, setDialogBoxStatusFn } = this.props
    const oJson = {
      id: labelObj.labelId,
      name: labelObj.title,
      mark: labelObj.status
    }
    onDelEditAddLabel(oJson)
    setDialogBoxStatusFn(false)
  }

  // input输入值
  onChangeInput = (e) => {
    this.setState({ labelValue: e.target.value })
  }

  // input对话框取消
  onInputCancelFn = () => {
    const { setInputDialogBoxStatusFn } = this.props
    setInputDialogBoxStatusFn(false)
  }

  // input对话框确认
  onInputOkFn = () => {
    const { labelValue, labelObj } = this.state
    const { onDelEditAddLabel, setInputDialogBoxStatusFn } = this.props
    const oJson = {
      id: labelObj.labelId,
      name: labelValue,
      mark: labelObj.status
    }
    if (labelValue) {
      onDelEditAddLabel(oJson)
      setInputDialogBoxStatusFn(false)
    } else {
      alert('标签不能为空!')
    }
  }

  render() {
    const { dialogObj, labelValue, labelObj } = this.state
    const { labelList, setInputDialogBoxStatusFn } = this.props

    return (
      <div className='association-label-wrapper'>
        {/*TopUserInfo*/}
        <TopUserInfo />
        {/*MainNav*/}
        <MainNav />
        <div className="association-label-main">
          <div className="add-type-wrapper">
            <div
              className="add-type"
              onClick={() => {
                setInputDialogBoxStatusFn(true)
                this.setState({
                  labelValue: '',
                  labelObj: {
                    labelId: '',
                    title: '添加标签',
                    status: 1
                  }
                })
              }}
            >添加标签</div>
          </div>
          <div className="label-wrapper">
            <div className="topic-top">
              <ul>
                <li className="li">名字</li>
                <li>操作</li>
              </ul>
            </div>
            <div className="topic-main">
              {
                labelList.length
                  ?
                  labelList.map((item, i) => {
                    return (
                      <ul key={i}>
                        <li className="li"># {item.label_title}</li>
                        <li>
                          <a
                            href="javascript:;"
                            onClick={() => {
                              setInputDialogBoxStatusFn(true)
                              this.setState({
                                labelValue: item.label_title,
                                labelObj: {
                                  labelId: item.label_id,
                                  title: '编辑标签',
                                  status: 2
                                }
                              })
                            }}
                          >编辑</a>
                          <a
                            className="a"
                            href="javascript:;"
                            onClick={() => this.onDelLabelFn(item.label_id, item.label_title, 0)}
                          >删除</a>
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
        {/*对话框*/}
        <DialogBox
          dialogObj={dialogObj}
          onOk={() => this.onOkFn()}
          onCancel={() => this.onCancelFn()}
        />
        {/*input对话框*/}
        <InputDialogBox
          InputDialogBoxTitle={labelObj.title}
          onChange={(e) => this.onChangeInput(e)}
          value={labelValue}
          onOk={() => this.onInputOkFn()}
          onCancel={() => this.onInputCancelFn()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  labelList: state.associationLabel.labelList
})

const mapDispatchToProps = dispatch => ({
  getAssociationLabel: data => {
    dispatch({
      type: 'GET_ASSOCIATION_LABEL'
    })
  },
  onDelEditAddLabel: (data) => {
    dispatch({
      type: 'DEL_EDIT_ADD_LABEL',
      data
    })
  },
  setDialogBoxStatusFn: dialogBoxStatus => {
    dispatch({
      type: 'DIALOG_BOX_STATUS',
      dialogBoxStatus
    })
  },
  setInputDialogBoxStatusFn: inputDialogBoxStatus => {
    dispatch({
      type: 'INPUT_DIALOG_BOX_STATUS',
      inputDialogBoxStatus
    })
  }
})

const AssociationLabelProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssociationLabel)

export default AssociationLabelProps
