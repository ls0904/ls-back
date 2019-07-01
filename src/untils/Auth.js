import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends React.Component {
  render() {
    let {component:Component, user, ...rest} = this.props;
    return (
      <Route {...rest} render={(routerProps) => {
        if(user.email){
          return <Component  {...routerProps}/>
        } else {
          return <Redirect to= {{
            pathname:'/login',
            state: { redirect: routerProps.match.url }
          }} />
        }
      }}>

      </Route>
    )
  }
}

export default connect( ({ user }) => {
  return {
    user
  }
},null)(AuthRoute)
