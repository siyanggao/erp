import React from 'react'
import { Card } from 'antd';
import DivideHeader from '../common/divide_title'
import './home.css'
import '../common/common.css'

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <div className="home_div1">
                    <DivideHeader title="我的工作"/>
                    <div className="card_container">
                        <Card title="常用功能" className="home_container card">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card title="常用功能" className="home_container card">
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                    
                </div>
            </div>
        )
    }
}