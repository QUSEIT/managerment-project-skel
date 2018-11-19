import React from 'react'

class ManagementBasicsDetail extends React.Component {
  // 状态机
  constructor (props) {
    super (props)
    this.state = {
    }
  }
  // 将要加载页面之前
  componentWillMount () {
  }
  // 加载完成页面之后
  componentDidMount () {
  }

  render() {
    return (
        <div className='basics-detail-wrapper'>
          <div className='detail-main'>
            <div className='detail-text'>
              <h4>退款申请</h4>
              <ul>
                <li>取货单号：1000000000</li>
                <li>状态：已取货</li>
                <li>销售单号：123456</li>
                <li>子&nbsp;&nbsp;订&nbsp;单：98566256</li>
              </ul>
            </div>
            <div className='detail-text'>
              <h4>用户信息</h4>
              <ul>
                <li>用户姓名：付晓晓</li>
                <li>联系电话：15289674970</li>
                <li>常用仓库：：菜鸟仓储</li>
                <li>取货地址：浙江省杭州市西湖区万塘路18号</li>
                <li>备注：无</li>
              </ul>
            </div>
            <div className='goods-wrapper'>
              <h4>退货商品</h4>
              <ul>
                <div className='goods-title'>
                  <span className='span1'>商品编号</span>
                  <span className='span2'>商品名称</span>
                  <span className='span3'>商品条码</span>
                  <span className='span4'>单价</span>
                  <span className='span5'>数量（件）</span>
                  <span className='span6'>总金额</span>
                </div>
                <li>
                  <span className='span1'>1234561</span>
                  <span className='span2'>矿泉水  550ml</span>
                  <span className='span3'>12421432143214321</span>
                  <span className='span4'>2.00</span>
                  <span className='span5'>1</span>
                  <span className='span6'>2.00</span>
                </li>
                <li>
                  <span className='span1'>1234561</span>
                  <span className='span2'>矿泉水  550ml</span>
                  <span className='span3'>12421432143214321</span>
                  <span className='span4'>2.00</span>
                  <span className='span5'>1</span>
                  <span className='span6'>2.00</span>
                </li>
                <li>
                  <span className='span1'>1234561</span>
                  <span className='span2'>矿泉水  550ml</span>
                  <span className='span3'>12421432143214321</span>
                  <span className='span4'>2.00</span>
                  <span className='span5'>1</span>
                  <span className='span6'>2.00</span>
                </li>
              </ul>
            </div>
            <div className='goods-wrapper return-progress'>
              <h4>退货进度</h4>
              <ul>
                <div className='goods-title'>
                  <span className='span1'>时间</span>
                  <span className='span2'>当前进度</span>
                  <span className='span3'>状态</span>
                  <span className='span4'>操作员ID</span>
                  <span className='span5'>耗时</span>
                </div>
                <li>
                  <span className='span1'>2017-10-01 14:10</span>
                  <span className='span2'>联系客户</span>
                  <span className='span3'><i></i>进行中</span>
                  <span className='span4'>取货员 ID123</span>
                  <span className='span5'>5mins</span>
                </li>
                <li>
                  <span className='span1'>2017-10-01 14:10</span>
                  <span className='span2'>联系客户</span>
                  <span className='span3 end'><i></i>成功</span>
                  <span className='span4'>取货员 ID123</span>
                  <span className='span5'>5mins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default ManagementBasicsDetail
