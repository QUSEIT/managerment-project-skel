import React from 'react'

class Radio extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
      radioList: ''
    }
  }
  // 将要加载页面之前
  componentWillMount () {
    this.props.list.forEach((e) => {
      e['make'] = false
    })
    this.setState({
      radioList: this.props.list
    })
  }
  // 加载完成页面之后
  componentDidMount () {
  }
  // 点击单选框
  onRadioFn = (index) => {
    this.props.list.forEach((e, i) => {
      if (index === i) {
        e.make = true
        this.props.onRadioDataFn({title: e.title, index: i})
      } else {
        e.make = false
      }
      this.setState({
        radioList: this.props.list
      })
    })
  }

  render() {
    return (
      this.state.radioList.map((e, i) => {
        return (
            <div className='radio-list' key={i} onClick={() => this.onRadioFn(i)}>
              <div className={e.make ? 'do active' : 'do'}>
                <i></i>
              </div>
              <p>{e.title}</p>
            </div>
        )
      })
    )
  }
}

export default Radio
