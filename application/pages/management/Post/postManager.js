import React from 'react'
import Button from '../../../components/base/button'
import Router from 'next/router'

class ManagermentPostManager extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    onSkipAddPost = () => {
        // Router.push('../../../components/management/basicsDetail/basicsDetail')
        // Router.push('/management/Post/addPost')
    }

    render () {
        return (
            <div className="postManagerment-wrapper">
                <div className="list-wrapper">
                    <div className="top-wrapper">
                        <div className="review-wrapper">
                            <Button type='primary' name='未审核'></Button>
                            <Button type='minor' name='审核通过'></Button>
                            <Button type='minor' name='审核不通过'></Button>
                        </div>
                        <div className="button">
                            <Button type='primary' name='添加帖子' clickEvent={this.onSkipAddPost}></Button>
                        </div>
                    </div>
                    <div className="classify-wrapper">
                        <Button type='primary' name='文字'></Button>
                        <Button type='minor' name='图文'></Button>
                        <Button type='minor' name='PDF'></Button>
                    </div>
                    <div className="list-main">
                        <div className="list-title">
                            <h4>名称</h4>
                            <h4>图片</h4>
                            <h4>内容</h4>
                            <h4>点赞数</h4>
                            <h4>收藏数</h4>
                            <h4>发布时间</h4>
                            <h4>操作</h4>
                        </div>
                        <div className="list-content">
                            <ul>
                                <li>
                                    <span className="span1">非常酷炫的昵称哦</span>
                                    <span className="span2"></span>
                                    <span className="span3">内容很有教育寓意，多发一些这类的文档，引人注目</span>
                                    <span className="span4">10</span>
                                    <span className="span5">5</span>
                                    <span className="span6">2019-01-01 10:00</span>
                                    <span className="span7">删除</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagermentPostManager