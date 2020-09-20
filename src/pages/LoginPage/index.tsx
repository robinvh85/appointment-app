import React from 'react';
import { Card, Tabs } from 'antd';

import UnauthorizedLayout from 'components/layouts/UnauthorizedLayout';
import AdminLoginForm from './AdminLoginForm';
import UserLoginForm from './UserLoginForm';

const { TabPane } = Tabs;

const LoginPage = () => {
  return (
    <UnauthorizedLayout>
      <Card title="Login" bordered={false} style={{ width: 600 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Admin" key="1">
            <AdminLoginForm />
          </TabPane>
          <TabPane tab="User" key="2">
            <UserLoginForm />
          </TabPane>
        </Tabs>
      </Card>
    </UnauthorizedLayout>
  )
}

export default LoginPage;