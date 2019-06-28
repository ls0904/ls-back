import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { HomeWrap, SiderWrap, ContentWrap, FooterWrap, HeaderWrap, Logo } from './style';
import {Route, Switch, NavLink} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <HomeWrap>
        <Layout>
          <SiderWrap collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Logo />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Icon type="user" />
              <NavLink to='/student' className='list-a'>学生管理</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="team" />
                <NavLink to='/teacher' className='list-a'>教师管理</NavLink>
              </Menu.Item>
            </Menu>
          </SiderWrap>
          <Layout>
            <HeaderWrap>
            <Button type="danger">退出登录</Button>
            </HeaderWrap>
            <ContentWrap>
              <Breadcrumb>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Route path="/student" render={ () => <h1>学生</h1> }></Route>
                <Route path="/teacher" render={ () => <h1>教师</h1> }></Route>
              </Switch>
            </ContentWrap>
            <FooterWrap style={{ textAlign: 'center',padding: '10px 50px' }}>Ant Design ©2019 学生后台管理系统---一个成长中的西红柿</FooterWrap>
          </Layout>
        </Layout>
      </HomeWrap>
    )
  }
}


// const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1">
//               <Icon type="pie-chart" />
//               <span>Option 1</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="desktop" />
//               <span>Option 2</span>
//             </Menu.Item>
//             <SubMenu
//               key="sub1"
//               title={
//                 <span>
//                   <Icon type="user" />
//                   <span>User</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={
//                 <span>
//                   <Icon type="team" />
//                   <span>Team</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9">
//               <Icon type="file" />
//               <span>File</span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#fff', padding: 0 }} />
//           <Content style={{ margin: '0 16px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// ReactDOM.render(<SiderDemo />, mountNode);
