import * as Types from './actionTypes';
import http from '@/untils/http';


export const onStudentList = (data) => ({
  type: Types.SET_GRADE_LIST,
  ...data
})

export const asyncGradeList = () => {
  return (dispatch) => {
    http.get('/api/grade',{
      params:{
        pageSize:100
      }
    }).then(res => {
      console.log(res);
      dispatch(onStudentList(res.data))
    });
  };
};

export const onChgVisible = () => ({
  type: Types.SET_VISIBLE
})

export const onChgCurGradeId = (id) => ({
  type: Types.SET_CUR_GRADE_ID,
  id
})
