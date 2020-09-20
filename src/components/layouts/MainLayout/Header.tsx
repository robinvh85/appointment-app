import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

import { LOGIN_COOKIE } from 'constants/app';
import history from 'browserHistory';

type Props = {}

const Header: React.FC<Props> = ({ children }) => {
  const loginCookie = Cookies.get(LOGIN_COOKIE);

  const handleLogout = () => {
    Cookies.remove(LOGIN_COOKIE);
    history.push('/');
  }

  const profileList = (
    <Menu style={{width: 100}}>
      <Menu.Item>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>);

  return (
    <Layout.Header>
      <div className='logo'>LOGO</div>
      <div className='profile'>
        {
          loginCookie ? 
          <Dropdown overlay={profileList} trigger={['click']}>
            <FontAwesomeIcon icon={faUserCircle} />
          </Dropdown>
          :
          <Link to='/login'>Login</Link>
        }
      </div>
    </Layout.Header>
  );
}

export default Header;