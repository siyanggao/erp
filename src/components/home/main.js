import React from 'react'
<<<<<<< HEAD
import { Tabs,Layout,Input,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import './main.css'

=======
import { Tabs } from 'antd'
import { renderRoutes,matchRoutes } from 'react-router-config'
import {Route, HashRouter, Switch} from 'react-router-dom'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import Content from './content'
import routes from '../../routes'
>>>>>>> 2e588627ad408bdd00073c929cc483f00b2a67c5

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
        console.log('matchRoutes', matchRoutes(routes, "/child/23"));
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
                {/* {this.props.children} */}
                {console.log(this.props.route.routes)}
                {renderRoutes(this.props.route.routes)}

                {/* <Content/> */}
                {/* <div>
                    <Tabs defaultActiveKey="1" onChange={this.callback} type="editable-card">
                        <TabPane tab="Tab 1" key="1" >
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        </TabPane>
                    </Tabs>
                </div> */}
                {/* <HashRouter>
                    <Switch>
                        <Route path="/home/detail1" component={Detail1}/>
                        <Route  path="/detail2" component={Detail2}/>
                    </Switch>
                </HashRouter> */}
            </div>
        )
    }
}