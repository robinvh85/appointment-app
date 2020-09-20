import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

import { API_DOMAIN, MESSAGE_DELAY_TIME, TRIAL_ALLOWED, TRIAL_PERIOD, LOGIN_COOKIE } from 'constants/app';
import history from 'browserHistory';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
  const data = { ...values, trialAllowed: TRIAL_ALLOWED, trialPeriod: TRIAL_PERIOD };

  axios.post(`${API_DOMAIN}/login/user`, data)
  .then(function (response) {
    Cookies.set(LOGIN_COOKIE, response.data);
    history.push('/');
  })
  .catch(function (error) {
    message.error(error.response.data.message, MESSAGE_DELAY_TIME);
  });
};

const UserLoginForm = () => {
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Shop ID"
        name="shopID"
        rules={[{ required: true, message: 'Please input Shop ID!' }]}
      >
        <Input maxLength={100} />
      </Form.Item>
      <Form.Item
        label="User ID"
        name="userID"
        rules={[{ required: true, message: 'Please input User ID!' }]}
      >
        <Input maxLength={100} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input Password!' }]}
      >
        <Input.Password maxLength={50} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserLoginForm;