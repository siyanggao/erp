import React, { Component } from 'react'
import menuConfig from './menu_config'
import Divider from '../common/divide_title'
import './submenu.css'

export default class SubMenu extends Component {
    getSubMenu = () => {
        let menu = []
        menuConfig.map(item => {
            item.children.map(item2 => {
                if(item2.url == this.props.match.url){
                    menu = item2.children
                }
            })
        })
        console.log(menu)
        return menu
    }
    render() {
        return (
            <div>
                {
                    this.getSubMenu().map(item=>{
                        // console.log(item)
                        return <div className={"divider"}>
                            <Divider key={item.url} title={item.name}></Divider>
                            {
                                item.children.map(item2=>{
                                    return <div>q</div>
                                })
                            }
                        </div>
                    })
                    // this.getSubMenu()
                }
            </div>
        )
    }
}
