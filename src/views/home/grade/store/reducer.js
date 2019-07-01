import * as Types from './actionTypes';


const initState = {
  curGradeId:'', //当前操作的班级Id
  visible:false,
  list:[] //班级数据
}
export default(state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if(action.type === Types.SET_GRADE_LIST) {
    newState.list = action.list
  }
  if(action.type === Types.SET_VISIBLE) {
    newState.visible = !newState.visible
  }
  if(action.type === Types.SET_CUR_GRADE_ID){
    newState.curGradeId = action.id
  }
  return newState;
}
