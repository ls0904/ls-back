import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { InputVal } from './style';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.handleSignIn(values)
          }
        });
      };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <InputVal>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input
                prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="please input your Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true,min:3, message: 'Your password should not be less than six digits!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="please input your Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className="login-form-forrig">Remember me</Checkbox>)}
            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </Form.Item>
        </Form>
      </InputVal>
    )
  }
}

const LoginUi = Form.create({})(Login);

export default connect (
  null,
  dispatch => ({
    handleSignIn (values) {
      dispatch(actions.asyncSignIn(values))
    }
  })
)(LoginUi);
