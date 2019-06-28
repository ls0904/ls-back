
import * as Types from './actionType'
const initUser = window.localStorage.getItem('user') ?  window.localStorage.getItem('user') : {email:''}
export default (state = initUser, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if(action.type === Types.SIGN_IN ) {
    newState.email = action.value.email
  }
  return newState;
}
