import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    click = e => {
        console.log(this.props.url)
    }
    render() {
        return (
            <div className="item_root card" onClick={()=>this.click()}>
                {this.props.name}
            </div>
        )
    }
}
