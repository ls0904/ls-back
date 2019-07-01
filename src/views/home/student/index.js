import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { StuTable } from './style';
import { Button, Modal, Form, Radio, Input, Select} from 'antd';

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
            <Button type='danger' onClick={this.props.handleDelStudent.bind(this,row._id)}>删除</Button>
          </div>
        )
      }
    }
  ]
  /**
   * 显示弹出框的方法
   * @param {Boolean} visible 是否显示
   */
  showModal = (visible) => {

    let curStudentInfo = this.props.list.find(item => item._id ===this.props.curStudentId) || {};
    console.log(curStudentInfo);
   if( visible ) {
    const InputGroup  = Input.Group;
    const { Option } = Select;
    return (
      <Modal
      title='修改学生信息'
      visible={this.props.visible}
      onOk={this.props.handleOk}
      onCancel={this.props.handleCancel}
      >
        <Form labelCol={{ span:6 }} wrapperCol={{span: 14 }}>
          <Form.Item label='学生姓名：'>
            <Input defaultValue={ curStudentInfo.studentName} />
          </Form.Item>
          <Form.Item label='选择性别：'>
            <Radio.Group defaultValue = {  curStudentInfo.gender }>
              <Radio value = { 1 }>男</Radio>
              <Radio value = { 0 }>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='选择班级：'>
            <InputGroup compact>
              <Select defaultValue= { curStudentInfo.gradeId.gradeName }    style={{ width:200 }}>
                <Option value="sz-1903">sz-1903</Option>
              </Select>
            </InputGroup>
          </Form.Item>
        </Form>
      </Modal>
    );
  } else {
      return null;
    }
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
  }
}

export default connect(
  ({ student }) => ({
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
  handleOk(){
    dispatch(actions.onChgVisible())
  },
  handleCancel(){
    dispatch(actions.onChgVisible())
  }
})
)(Student);
