import React from 'react'
import Input from '../../../components/base/input'
import Textarea from '../../../components/base/textarea'
import Button from '../../../components/base/button'

class AddPost extends React.Component {
    constructor (Props) {
        super (Props)
        this.state = {

        }
    }

    render () {
        return (
            <div className='addPost-wrapper'>   
                <div className='addPost-main'>
                    <div className='selected-wrapper'>
                        <div className='selected-user-wrapper'>
                            <h3>选择用户:</h3>
                            <div className='input-user'>
                                <Input placeholder='请选择'></Input>
                            </div>
                        </div>
                        <div className='selected-postType-wrapper'>
                            <h3>选择帖子类型:</h3>
                            <div className='input-postType'>
                                <Input placeholder='文字'></Input>
                            </div>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='selected-CoverImage-wrapper'>
                            <h3>选择封面:</h3>
                        </div>
                        <div className='selected-images-wrapper'>
                            <h3>选择封面:</h3>
                        </div>
                    </div>  
                    <div className='content-wrapper'>
                        <div className='input-title-wrapper'>
                            <h3>输入标题:</h3>
                            <div className='input-title'>
                                <Input placeholder='请输入标题'></Input>
                            </div>
                        </div>
                        <div className='input-content-wrapper'>
                            <h3>输入标题:</h3>
                            <div className='input-content'>
                                <Textarea placeholder='请输入内容'></Textarea>
                            </div>
                        </div>  
                    </div>
                    <div className='pdf-wrapper'>
                        <div className='pdf-form'>
                            <div className='title-wrapper'>
                                <span> (PC) </span>
                                <span>输入pdf地址</span>
                                <p>or</p>
                                <div className=''>
                                    <Button type='primary' name='选择'></Button>
                                </div>
                            </div>
                            <div className='input-pdf-address'> 
                                <Input></Input>
                            </div>
                        </div>
                        <div className='pdf-form'>
                            <div className='title-wrapper'>
                                <span> (H5) </span>
                                <span>输入pdf地址</span>
                                <p>or</p>
                                <div className=''>
                                    <Button type='primary' name='选择'></Button>
                                </div>
                            </div>
                            <div className='input-pdf-address'> 
                                <Input></Input>
                            </div>
                        </div>
                    </div>
                    <div className='publish-wrapper'>
                        <div className='publish-btn'>
                            <Button type='primary' name='发布'></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost