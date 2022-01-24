import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  CalculatorOutlined
} from '@ant-design/icons';

import 'antd/dist/antd.min.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<CalculatorOutlined />}>
              ascii [1]
            </Menu.Item>
            <Menu.Item key="2" icon={<CalculatorOutlined />}>
              ascii [2]
            </Menu.Item>
            <Menu.Item key="3" icon={<CalculatorOutlined />}>
              ascii [3]
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>ASCII</Breadcrumb.Item>
              <Breadcrumb.Item>Calculator</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Send help uwu
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>CSARCH ascii-team </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App