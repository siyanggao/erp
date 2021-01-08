import React from 'react'
import { Tabs,Layout,Input,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import './main.css'


const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

export default class Main extends React.Component{
    callback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="header_icon"></div>
                        <div className="header_empty"></div>
                        <Input placeholder="search" className="header_search"/>
                        <div className="header_divider">|</div>
                        <Dropdown overlay={menu} className="header_user" placement="bottomCenter">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </Header>
                </Layout>
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