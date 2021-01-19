import React, { Component } from 'react'
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom'
import './item.css'

@inject("tabs")
@observer
class Item extends Component {
    constructor(props){
        super(props)
    }
    click = e => {
        console.log(this.props.item)
    }
    render() {
        return (
            <div className="item_root card" onClick={()=>this.click()}>
                {this.props.name}
            </div>
        )
    }
}
export default withRouter(Item)
