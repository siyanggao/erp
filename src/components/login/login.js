import React from 'react'
import './login.css'
import { Input } from 'antd';
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="root">
                <div className="logo">
                </div>
                <div className="login">
                    <div>logo</div>
                    <div>
                        <Input size="large" placeholder="用户名" prefix={<UserOutlined />} />
                    </div>
                    <div>
                        <Input.Password
                            size="large"
                            placeholder="密码"
                            prefix={<LockOutlined />}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <button>button</button>
                </div>
            </div>
        )
    }
}