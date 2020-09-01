import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Menu } from './styles';

const TopMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </Menu>
    </Wrapper>
  )
}

export default TopMenu;