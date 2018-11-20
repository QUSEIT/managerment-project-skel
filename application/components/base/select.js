import React from 'react'

class Select extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      selectStatus: false,
      labelList: '',
      labelName: ''
    }
  }
  // 将要加载页面之前
  componentWillMount () {
    this.setState({
      labelList: this.props.list,
      labelName: this.props.value
    })
  }
  // 加载完成页面之后
  componentDidMount () {
  }
  // 显示隐藏选择框
  onSelectFn = () => {
    this.setState({
      selectStatus: !this.state.selectStatus
    })
  }
  // 选择item
  onSelectItemFn = (value) => {
    this.setState({
      labelName: value
    })
  }
  render() {
    return (
        <div
            className={this.state.selectStatus ? 'select-template select-template-active' : 'select-template'}
            onClick={this.onSelectFn}
        >
          <span className={this.state.labelName ? 'span-active' : ''}>{this.state.labelName || '请选择'}</span>
          <i className={this.state.selectStatus ? 'i-active' : ''}>
            <img src='../../static/img/ic_down.png'/>
          </i>
          {
            this.state.selectStatus
              ?
              <div className='select-ul'>
                {
                  this.state.labelList.map((e, i) => {
                    return (
                      <div className='select-li' key={i} onClick={() => {this.onSelectItemFn(e.value, e.label)}}>{e.value}</div>
                    )
                  })
                }
              </div>
              :
              null
          }
        </div>
    )
  }
}

export default Select
