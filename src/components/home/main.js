import React from 'react'
import { Tabs, Layout, Input, Menu, Dropdown } from 'antd';
import { DownOutlined,SearchOutlined } from '@ant-design/icons';
import './main.css'
import { renderRoutes } from 'react-router-config'
import Detail1 from '../detail1'
import Detail2 from '../detail2'
import Content from './content'

const { TabPane } = Tabs;
const { Header, Footer, Sider } = Layout;

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

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1', closable: false },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2', closable: false },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        }
    }
    onChange = activeKey => {
        this.setState({ activeKey });
        switch (activeKey) {
            case '1':
                this.props.history.push('/home')
                break;
            case '2':
                this.props.history.push('/menu')
                break;
        }
    };
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
                        <Input placeholder="search" className="header_search" prefix={<SearchOutlined />}/>
                        <div className="header_divider">|</div>
                        <Dropdown overlay={menu} className="header_user" placement="bottomCenter">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </Header>
                    <Tabs
                        hideAdd
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit}
                        size="small"
                        type="editable-card">
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}></TabPane>
                        ))}
                    </Tabs>
                </Layout>
                {/* {this.props.children} */}
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