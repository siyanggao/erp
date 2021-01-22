import React from 'react'
import { Menu } from 'antd';
import './menu.css'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import menuConfig from '../menu/menu_config'
import MySubMenu from '../menu/submenu'

const { SubMenu } = Menu;

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedData: menuConfig[0].children[0]
        };        
    }
    clickHandler = (item) => {
        this.setState({
            selectedData: item
        })
    }
     //处理左侧菜单
     getSubmenu = () => {
        return menuConfig.map(item => {
            if(item.type !== 'mainmenu') return null
            return (
                <SubMenu key={item.url} title={<span><span>{item.name}</span></span>}>
                    {item.children.map(v => {                                
                        return <Menu.Item key={v.url} onClick={()=>this.clickHandler(v)}>{v.name}</Menu.Item>                               
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
                <MySubMenu data={this.state.selectedData}></MySubMenu>
               {/* {renderRoutes(this.props.route.routes)} */}
            </div>
        )
    }
}