import React from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import { Link } from 'react-router-dom'
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
const { SubMenu,MenuItem } = Menu;

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            slideBarConfig :[
                {name: "列表", icon: "ordered-list", url: "/list", children: [
                  {name: "详情", url: "/list/detail", hidden: true},
                ]},
                {name: "系统管理", icon: "appstore", url: "/system", children: [
                  {name: "账号管理", url: "/system/accountManage"},
                  {name: "角色管理", url: "/system/roleManage"}
                ]},
                {name: "兄弟组件传值", icon: "hdd", url: "/childToChild", hidden: true,},
                {name: "父组件向子组件传值", icon: "snippets", url: "/parentToChild"},
                {name: "子组件向父组件传值", icon: "copy", url: "/childToParent"},
                {name: "状态管理Redux", icon: "inbox", url: "/redux"}
            ]
            
        };
    }
     //处理左侧菜单
     getSubmenu = () => {
        return this.state.slideBarConfig.map(item => {
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
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {console.log(this.getSubmenu())}
                    {this.getSubmenu()}
                </Menu>
                <HashRouter>
    <Switch>
    <Route path="/home/detail1" component={Detail1}/>
      <Route  path="/detail2" component={Detail2}/>
      
    </Switch>
  </HashRouter>
            </div>
        )
    }
}