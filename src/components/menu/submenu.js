import React, { Component } from 'react'
import menuConfig from './menu_config'
import Divider from '../common/divide_title'
import './submenu.css'
import Item from './item'

export default class SubMenu extends Component {
    getSubMenu = () => {
        let menu = []
        menuConfig.map(item => {
            item.children.map(item2 => {
                if('/menu/'+item2.url === this.props.match.url){
                    menu = item2.children
                }
                return item2
            })
            return item
        })
        return menu
    }
    render() {
        return (
            <div>
                {
                    this.getSubMenu().map(item=>{
                        // console.log(item)
                        return <div className={"divider"} key={item.url}>
                            <Divider title={item.name} isBlod={true}></Divider>
                            {
                                item.children.map(item2=>{
                                    return <div className="item_divider" key={item2.url}><Item name={item2.name} url={item2.url}></Item></div>
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
