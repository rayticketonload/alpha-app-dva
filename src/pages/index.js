import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import ContentLayout from '@layouts/contentLayout';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch({
      type: 'loginStatus/login',
    });
  };

  componentDidMount() {}

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <ContentLayout extraClass="login-wrap" needFooter={true}>
        <div className="login-box">
          <div className="login-box-top">
            <div className="login-title">
              <div className="title-content">账号密码登录</div>
            </div>
            <div className="fn-mt-50">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入登录密码' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item className="fn-mt-40">
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </Form.Item>
              </Form>
              <div className="clearfix fn-mt-20">
                <Link to="/" className="float-left">
                  忘记登录密码?
                </Link>
                <Link to="/" className="float-right">
                  注册账号
                </Link>
              </div>
            </div>
          </div>
          <div className="login-box-bottom">
            <Icon type="mobile" className="fn-mr-5" />
            手机短信登录
          </div>
        </div>
      </ContentLayout>
    );
  }
}

const mapStateToProps = state => {
  //见名知意，把state转换为props
  //可以打印state看看数据结构，然后放到data里
  console.log('state', state);
  return {
    data: state.data,
  };
};

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);
// export default WrappedNormalLoginForm;
export default connect(mapStateToProps)(WrappedNormalLoginForm);
