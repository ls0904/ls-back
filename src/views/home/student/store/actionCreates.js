import * as Types from './actionTypes';
import http from '@/untils/http';

export const onStudentList = (data) => ({
  type:Types.SET_STUDENT_LIST,
  ...data
})



export const asyncStudentList = () => {
  return (dispatch) => {
    http.get('/api/student',{
      params:{
        pageSize:100
      }
    }).then(res => {
      console.log(res);
      dispatch(onStudentList(res.data));
    });
  };
};


export const asyncDelStudent = (id) => {
  return (dispatch) => {
    http.delete(`/api/student/${id}`).then(res => {
      console.log(res)
      dispatch({
        type: Types.DEL_STUDENT,
        id
      })
    })
  }
}


export const onChgVisible = () => ({
  type: Types.SET_VISIBLE
})

export const onChgCurStudentId = (id) => ({
  type: Types.SET_CUR_STUDENT_ID,
  id
})
