import React from 'react'
import {  Tabs, Button  } from 'antd';
import { renderRoutes } from 'react-router-config';
import routes from './routes'

const { TabPane } = Tabs;
export default class Content extends React.Component{
    constructor(props){
        super(props)
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
          ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        }
    }
    onChange = activeKey => {
        this.setState({ activeKey });
        // switch(activeKey){
        //     case '1':
        //         this.props.history.push('/detail1')
        //         break;
        //     case '2':
        //         this.props.history.push('/detail2')
        //         break;
        // }
      };
    render() {
        return (
            <div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    onEdit={this.onEdit}
                    size="small"
                    type="editable-card"
                    >
                    {this.state.panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key}>
                        {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
                {renderRoutes(routes)}
            </div>
        )
    }
}