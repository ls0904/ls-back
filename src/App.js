import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable'
import { Spin } from 'antd';


// import Login from '@/views/login'
// import Sign from '@/views/sign'
// import Home from '@/views/home'

const Login = Loadable({
  loader: () => import('@/views/login'),
  loading: () => <Loding />
});
const Sign = Loadable({
  loader: () => import('@/views/sign'),
  loading: () => <Loding />
});
const Home = Loadable({
  loader: () => import('@/views/home'),
  loading: () => <Loding />
});

const Loding = () => {
    return (
      <Spin tip="Loading...请稍后">
    </Spin>
    )
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={ Login }></Route>
          <Route path='/sign' component={ Sign }></Route>
          <Route path='/' component={ Home }></Route>
        </Switch>
      </Router>
    )
  }
}
