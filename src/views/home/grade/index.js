import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { StuTable } from './style';
import { Button, Modal, Form, Input } from 'antd'


 class Grade extends Component {
   colums = [
    {
      title:'ClassId',
      key: 'ClassId',
      dataIndex:'_id'
    },
    {
      title:'ClassName',
      key:'ClassName',
      dataIndex:'gradeName'
    },
    {
      title:'operation',
      key:'operation',
      dataIndex:'operation',
      render: (text,row,index) => {
        return (
          <div>
            <Button type="primary" shape='round' onClick= { this.props.handleUpdate.bind(this,row._id) }>修改</Button>&nbsp;&nbsp;
            <Button type='danger' shape='round'>删除</Button>
          </div>
        )
      }
    }
  ]

  showModal = (visible) => {
    let curGradeInfo = this.props.list.find(item => item._id ===this.props.curGradeId);
    console.log(curGradeInfo);
    // console.log(this.props.curGradeId);
   if(visible) {
    return (
      <Modal
      visible={ this.props.visible}
      onOk={this.props.handleOk}
      onCancel={this.props.handleCancel}>
        <Form labelCol={{ span:6 }} wrapperCol={{span: 14 }}>
          <Form.Item label='修改班级名称：'>
            <Input defaultValue={ curGradeInfo.gradeName }/>
          </Form.Item>
        </Form>
      </Modal>
    )
   } else {
     return null;
   }
  }
  render() {
    return (
      <div>
        <StuTable rowKey="_id" columns={ this.colums } dataSource={ this.props.list }/>
        {this.showModal(this.props.visible)}
      </div>
    )
  }
  componentDidMount(){

    this.props.handleGetGradeList();
  }
}

export default connect(
  ({ grade }) => ({
    list: grade.list,
    visible:grade.visible,
    curGradeId:grade.curGradeId
}),(dispatch) => ({
  handleGetGradeList () {
    dispatch(actions.asyncGradeList());
  },
  handleUpdate(id) {
    //1、修改班级ID
    console.log(id);

    dispatch(actions.onChgCurGradeId(id))
    //2、打开弹窗
    dispatch(actions.onChgVisible())
  },
  handleOk(){
    dispatch(actions.onChgVisible())
  },
  handleCancel(){
    dispatch(actions.onChgVisible())
  }
})
)(Grade);
