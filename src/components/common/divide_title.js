import React, { Component } from 'react'
import './divide_title.css'

export default class DivideHeader extends Component {
    render() {
        return (
            <div className="divide_root">
                <div className="divide_line"></div>
                <div className={'divide_title '+this.props.isBlod?"divide_title_blod":null}>{this.props.title}</div>
            </div>
        )
    }
}
