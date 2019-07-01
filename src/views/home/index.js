import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { HomeWrap, SiderWrap, ContentWrap, FooterWrap, HeaderWrap, Logo } from './style';
import {Route, Switch, NavLink} from 'react-router-dom';
import Garde from './grade'
import student from './student'

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
  handleSignOut = () => {
    window.localStorage.removeItem('user');
    window.location.reload();
  }
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
                <NavLink to='/grade' className='list-a'>班级管理</NavLink>
              </Menu.Item>
            </Menu>
          </SiderWrap>
          <Layout>
            <HeaderWrap>
            <Button type="danger" onClick = {this.handleSignOut}>退出登录</Button>
            </HeaderWrap>
            <ContentWrap>
              <Breadcrumb>
                <Breadcrumb.Item>Student</Breadcrumb.Item>
                <Breadcrumb.Item>grade</Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Route path="/student" component={ student }></Route>
                <Route path="/grade"  component={ Garde }></Route>
              </Switch>
            </ContentWrap>
            {/* <FooterWrap style={{ textAlign: 'center',padding: '10px 50px' }}>Ant Design ©2019 学生后台管理系统---一个成长中的西红柿</FooterWrap> */}
          </Layout>
        </Layout>
      </HomeWrap>
    )
  }
}
