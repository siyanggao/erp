import React from 'react'
import { Tabs } from 'antd';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import Content from './content'

const { TabPane } = Tabs;

export default class Main extends React.Component{
    callback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <div>
                    header
                </div>
                <Content/>
                <div>
                    <Tabs defaultActiveKey="1" onChange={this.callback} type="editable-card">
                        <TabPane tab="Tab 1" key="1" >
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        </TabPane>
                    </Tabs>
                </div>
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