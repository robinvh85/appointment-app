import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom'

import history from 'browserHistory';

const Header: React.FC<any> = () => {
  const location = useLocation();

  const handleSelectedMenu = (menu: any) => {
    history.push(menu.key);
  }

  return (
    <Layout.Header>
      <Menu 
        mode="horizontal" 
        onSelect={handleSelectedMenu}
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/login">
          Login
        </Menu.Item>
        <Menu.Item key="/signup">
          Signup
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default Header;