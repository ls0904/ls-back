import * as Types from './actionTypes'

const initState = {
  curStudentId:'', //当前操作的学生Id
  visible:false,   //控制模态框
  list:[],  //学生列表数据
  pageTotal:1
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if(action.type === Types.SET_STUDENT_LIST){
    newState.list = action.list;
    newState.pageTotal = action.pageTotal;
  }

  if(action.type === Types.DEL_STUDENT) {
    let index = newState.list.findIndex( item => item._id === action.id);
    newState.list.splice(index, 1);
  }

  if(action.type === Types.SET_VISIBLE) {
    newState.visible = !newState.visible
  }
  if(action.type === Types.SET_CUR_STUDENT_ID) {
    newState.curStudentId = action.id
  }
  if(action.type === Types.UPD_STUDENT) {
    let index = newState.list.findIndex( item => item._id === action.id);
    newState.list[index] = {...newState.list[index], ...action.values};
  }
  return newState
}


