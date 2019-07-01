import * as Types from './actionType';
import http from '@/untils/http';


export const onsignIn = (value) => ({
  type: Types.SIGN_IN,
  value
})

export const asyncSignIn = (values, props) => {
  return (dispatch) => {
    http.post('/sign-in', JSON.stringify(values),{
      headers:{
        'Content-Type':"application/json"
      }
    }).then(res => {
      dispatch(onsignIn(res.data));
      window.localStorage.setItem('user',JSON.stringify(res.data));
      console.log(props);
      let redirect = props.location.state ?  props.location.state.redirect : "/";
      props.history.replace(redirect)
    })
  }
}




