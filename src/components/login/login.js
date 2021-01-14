import React from 'react'
import './login.css'
import { Input,Button } from 'antd';
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import http from '../../util/http'
import {Cookies,withCookies} from 'react-cookie'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }
    submit = (e) => {
        // http({
        //     loading: status => {
        //         this.setState({loading:true})
        //     }
        // })
        this.props.history.push('/home')
        this.props.cookies.set("token","123")
    }
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div className="root">
                <div className="logo">
                </div>
                <div className="login">
                <div className="icon"></div>
                    <Input size="large" placeholder="用户名" prefix={<UserOutlined />} 
                        onChange={this.handleUsernameChange}
                        className="username"/>
                    <Input.Password
                        className="password"
                        size="large"
                        placeholder="密码"
                        prefix={<LockOutlined />}
                        onChange={this.handlePasswordChange}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Button type="primary" size="large" block className="login_btn" 
                        onClick={()=>this.submit()} loading={this.state.loading}>登录</Button>
                </div>
            </div>
        )
    }
}

export default withCookies(Login)