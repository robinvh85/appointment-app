import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import axios from 'axios';

import UnauthorizedLayout from 'components/layouts/UnauthorizedLayout';
import { API_DOMAIN, MESSAGE_DELAY_TIME } from 'constants/app';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignupPage = () => {
  const onFinish = (values: any) => {
    axios.post(`${API_DOMAIN}/signup/email`, values)
    .then(function (response) {
      message.success('Please check your email to proceed.', MESSAGE_DELAY_TIME);
    })
    .catch(function (error) {
      message.error(error.response.data.message, MESSAGE_DELAY_TIME);
    });
  };

  return (
    <UnauthorizedLayout>
      <Card title="Signup" bordered={false} style={{ width: 600 }}>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type='email' maxLength={100} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </UnauthorizedLayout>
  )
}

export default SignupPage;