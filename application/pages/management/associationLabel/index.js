import React from 'react'
import TopUserInfo from '../../../components/management/topUserInfo'
import MainNav from '../../../components/management/mainNav'
import {connect} from "react-redux";
import associationLabel from "../../../store/reducers/associationLabel";

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
    const { getAssociationLabel } = this.props
    // 获取标签列表
    getAssociationLabel()
  }

  render() {
    const { labelList } = this.props

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
                          <a href="javascript:;">编辑</a>
                          <a className="a" href="javascript:;">删除</a>
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
  labelList: state.associationLabel.labelList
})

const mapDispatchToProps = dispatch => ({
  getAssociationLabel: data => {
    dispatch({
      type: 'GET_ASSOCIATION_LABEL'
    })
  }
})

const AssociationLabelProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssociationLabel)

export default AssociationLabelProps
