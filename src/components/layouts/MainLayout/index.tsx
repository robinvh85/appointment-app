import React from 'react';

import { Wrapper, Body, Header, Footer } from './styles';
import TopMenu from 'components/layouts/TopMenu';

type Props = {
  children: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header>
        <TopMenu />
      </Header>
      <Body>
        { children }
      </Body>
      <Footer>Footer</Footer>
    </Wrapper>
  );
}

export default MainLayout;