import React, { Component } from 'react'
import menuConfig from './menu_config'

export default class SubMenu extends Component {
    getSubMenu = () => {
        let menu = {}
        menuConfig.map(item => {
            item.children.map(item2 => {
                if(item2.url == this.props.match.url){
                    menu = item2.children[0]
                }
            })
        })
        console.log(menu)
        return menu
    }
    render() {
        return (
            <div>
                submenu
                {
                    console.log(this.getSubMenu())
                }
            </div>
        )
    }
}
