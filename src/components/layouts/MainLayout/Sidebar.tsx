import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import { ReactComponent as faCalendar } from 'assets/icons/fontawesome/calendar-alt-solid.svg';
import { ReactComponent as faUsers } from 'assets/icons/fontawesome/users-solid.svg';
import { ReactComponent as faUserCog } from 'assets/icons/fontawesome/users-cog-solid.svg';
import Icon, { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'

import history from 'browserHistory';

const { Sider } = Layout;
type Props = {}

const menuItems = [
  { path: '/', text: 'Home', icon: <HomeOutlined /> },
  { path: '/appointments', text: 'Appointments', icon: <Icon component={faCalendar} /> },
  { path: '/employees', text: 'Employees', icon: <Icon component={faUserCog} /> },
  { path: '/clients', text: 'Clients', icon: <Icon component={faUsers} /> }
]

const Sidebar: React.FC<Props> = ({ children }) => {
  const [isMenuCollapse, setIsMenuCollapse] = useState(false);
  const location = useLocation();

  const handleMenuCollapse = () => setIsMenuCollapse(!isMenuCollapse);
  const handleSelectedMenu = (menu: any) => {
    history.push(menu.key);
  }

  return (
    <Sider 
      style={{ overflow: 'auto' }}
      collapsed={isMenuCollapse}
      collapsible
      onCollapse={handleMenuCollapse}
    >
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
        style={{ height: '100%' }}
        onSelect={handleSelectedMenu}
      >
        {
          menuItems.map((item) => (
            <Menu.Item key={item.path} icon={item.icon}>{ item.text }</Menu.Item>
          ))
        }
        
      </Menu>
    </Sider>
  );
}

export default Sidebar;