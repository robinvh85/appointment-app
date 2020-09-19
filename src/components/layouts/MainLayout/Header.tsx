import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Header: React.FC<Props> = ({ children }) => {
  const profileList = (
    <Menu style={{width: 100}}>
      <Menu.Item>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        Logout
      </Menu.Item>
    </Menu>);

  return (
    <Layout.Header>
      <div className='logo'>LOGO</div>
      <div className='profile'>
        <Dropdown overlay={profileList} trigger={['click']}>
          <FontAwesomeIcon icon={faUserCircle} />
        </Dropdown>
      </div>
    </Layout.Header>
  );
}

export default Header;