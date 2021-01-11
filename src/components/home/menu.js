import React from 'react'
import { Menu } from 'antd';
import './menu.css'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import menuConfig from '../menu/menu_config'

const { SubMenu,MenuItem } = Menu;

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            
        };
    }
     //处理左侧菜单
     getSubmenu = () => {
        return menuConfig.map(item => {
            if(item.type !== 'mainmenu') return
            if(!item.children || item.children.length === 0){    //如果当前路由没有子路由且该路由的hidden为false或不设置该路由的hidden时则直接显示该路由，若该路由的hidden为true则不显示该路由
                if(item.hidden) return false
 
                return (
                    <Menu.Item key={item.url}>
                        <Link to={item.url} replace> {/*加一个replace是因为当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思*/}
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )               
            }else if(item.children && item.children.length === 1){
                if(item.hidden) return false
 
                let noHiddenRouter = [];
                let hiddenRouter = [];
                item.children.map(v => {
                    if(v.hidden){
                        hiddenRouter.push(v)
                    }else{                        
                        noHiddenRouter.push(v)
                    }
 
                    return true
                })
 
                if(hiddenRouter.length > 0){ //当子路由只有一个且该子路由的hidden为true同时其父路由的hidden为false或不设置其父路由的hidden时则显示其父路由
                    return <Menu.Item key={item.url}><Link to={item.url} replace><span>{item.name}</span></Link></Menu.Item>
                }
 
                if(noHiddenRouter.length > 0){ //当子路由只有一个且该子路由的hidden为false或不设置该子路由的hidden时则显示其父路由和下拉的子路由                    
                    return (
                        <SubMenu key={item.url} title={<span><span>{item.name}</span></span>}>
                            {
                                noHiddenRouter.map(v => {                                
                                    return <Menu.Item key={v.url}><Link to={v.url} replace>{v.name}</Link></Menu.Item>                               
                                })
                            }
                        </SubMenu>
                    )
                }
            }else if(item.children && item.children.length > 1){  //当当前路由有两个及两个以上子路由时，若两个子路由的hidden都为true时则该路由和其子路由全部隐藏
                if(item.hidden) return false
 
                let noHiddenRouter = [];
                item.children.map(v => {
                    if(v.hidden){
                        return <Menu.Item key={item.url}><Link to={item.url} replace><span>{item.name}</span></Link></Menu.Item>
                    }else{                        
                        noHiddenRouter.push(v)
                        return true
                    }
                })
 
                if(noHiddenRouter.length > 0){
                    return (
                        <SubMenu key={item.url} title={<span><span>{item.name}</span></span>}>
                            {
                                noHiddenRouter.map(v => {                                
                                    return <Menu.Item key={v.url}><Link to={v.url} replace>{v.name}</Link></Menu.Item>                               
                                })
                            }
                        </SubMenu>
                    )
                }
            }
 
            return true
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