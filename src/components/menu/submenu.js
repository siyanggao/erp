import React, { Component } from 'react'
import menuConfig from './menu_config'
import Divider from '../common/divide_title'
import './submenu.css'
import Item from './item'

export default class SubMenu extends Component {
    constructor(props){
        super(props)
    }
    // getSubMenu = () => {
    //     let menu = []
    //     menuConfig.map(item => {
    //         item.children.map(item2 => {
    //             if(item2.url === this.props.data.url){
    //                 menu = item2.children
    //             }
    //             return item2
    //         })
    //         return item
    //     })
    //     return menu
    // }
    render() {
        return (
            <div>
                {
                    this.props.data.children.map(item=>{
                        return <div className={"divider"} key={item.url}>
                            <Divider title={item.name} isBlod={true}></Divider>
                            {
                                item.children.map(item2=>{
                                    return <div className="item_divider" key={item2.url}><Item name={item2.name} url={item2.url} item={item2}></Item></div>
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
