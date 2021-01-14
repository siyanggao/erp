import React from 'react'
import { Menu } from 'antd';
import './menu.css'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import menuConfig from '../menu/menu_config'

const { SubMenu } = Menu;

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this)
        
    }
     //处理左侧菜单
     getSubmenu = () => {
        console.log(this.$http)
        return menuConfig.map(item => {
            if(item.type !== 'mainmenu') return null
            return (
                <SubMenu key={item.url} title={<span><span>{item.name}</span></span>}>
                    {item.children.map(v => {                                
                        return <Menu.Item key={v.url}><Link to={'/menu/'+v.url} replace>{v.name}</Link></Menu.Item>                               
                    })}
                </SubMenu>
            )
        });
    }

    render() {
        return (
            <div className="menu_root">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                    {this.getSubmenu()}
                </Menu>
               {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}