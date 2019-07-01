import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import * as gradeActions from '../grade/store/actionCreates';
import { StuTable } from './style';
import { Button, Modal, Form, Radio, Input, Select  } from 'antd';
const { Option,  } = Select;

 class Student extends Component {
  columns =[
    {
      title:"ID",
      key:'id',
      dataIndex:'_id',
    },
    {
      title:"Name",
      key:'name',
      dataIndex:'studentName'
    },
    {
      title:"Class",
      key:'class',
      dataIndex:'gradeId.gradeName'
    },
    {
      title:"Sex",
      key:'sex',
      dataIndex:'gender',
      render(text, row, index) {
        return <div>{ text ? '男' : '女' }</div>
      }
    },
    {
      title:'operation',
      key:'operation',
      dataIndex:'operation',
      render: (text,row,index) => {
        return (
          <div>
            <Button onClick = { this.props.handleOpenUpdate.bind(this,row._id)}>修改</Button>&nbsp;&nbsp;
            <Button type='danger' onClick={() => {
              this.showDelModal(row._id);
            }}>删除</Button>
          </div>
        )
      }
    }
  ]
  showDelModal = (id) => {
    Modal.confirm({
      title: '删除警告',
      content: '请确认是否删除',
      onOk: () => {
        this.props.handleDelStudent(id);
      }
    });
  }
  /**
   * 显示弹出框的方法
   * @param {Boolean} visible 是否显示
   */
  showModal = () => {

    let curStudentInfo = this.props.list.find(item => item._id ===this.props.curStudentId) || {};
    console.log(curStudentInfo);

    let UpdateModal = (props) => {
      let { getFieldDecorator } = props.form;
      return (
        <Modal
        title='修改学生信息'
        visible={this.props.visible}
        onOk={ () => {
          this.props.handleOk(props.form)
        }}
        onCancel={this.props.handleCancel}
        >
          <Form labelCol={{ span:6 }} wrapperCol={{span: 14 }}>
            <Form.Item label='学生姓名：'>
              {
                getFieldDecorator('studentName',{
                  rules:[{required: true, message:'学生姓名不能为空'}],
                  initialValue:curStudentInfo.studentName
                })(<Input/>)
              }
            </Form.Item>
            <Form.Item label='选择性别：'>
             {getFieldDecorator('gender',{
               initialValue: curStudentInfo.gender
             })(
                <Radio.Group >
                <Radio value = { 1 }>男</Radio>
                <Radio value = { 0 }>女</Radio>
              </Radio.Group>
             )}
            </Form.Item>
            <Form.Item label='选择班级：'>
              {
                getFieldDecorator('gradeId', {
                  initialValue:curStudentInfo.gradeId && curStudentInfo.gradeId._id
                })(
                  <Select style={{ width:200 }}>
                    {this.props.gradeList.map(item => {
                      return(
                        <Option key={item._id}
                          value={item._id}>
                          { item.gradeName}
                        </Option>
                      );
                    })}
                  </Select>
                )}
            </Form.Item>
          </Form>
        </Modal>
      )
    };
    UpdateModal = Form.create({})(UpdateModal);
    return <UpdateModal />
}
  render() {
    return (
      <div>
        <StuTable rowKey='_id' columns={this.columns} dataSource={this.props.list} />
        {this.showModal(this.props.visible)}
      </div>
    );
  }

  componentDidMount(){
    this.props.handleGetStudentList();
    this.props.handleGetGradeList();
  }
}

export default connect(
  ({ student,grade }) => ({
    gradeList:grade.list,
    list: student.list,
    visible:student.visible,
    curStudentId:student.curStudentId
  }),(dispatch) => ({
  handleGetStudentList () {
    dispatch(actions.asyncStudentList());
  },
  handleDelStudent(id){
    dispatch(actions.asyncDelStudent(id))
  },
  handleOpenUpdate(id){
    //1、修改id
    dispatch(actions.onChgCurStudentId(id));
    //2、将弹窗打开
    dispatch(actions.onChgVisible())
  },
  handleOk(form){
    //想要得到form表单的数据
    form.validateFields((err, values) => {
      if(!err) {
        console.log(values);
        // 1、派发动作
        dispatch(actions.asyncUpdStudent(values))
        // 2、关闭弹窗
        dispatch(actions.onChgVisible())
      }
    })
  },
  handleCancel(){
    dispatch(actions.onChgVisible())
  },
  handleGetGradeList () {
    dispatch(gradeActions.asyncGradeList());
  }
})
)(Student);
