import React from 'react';
import { Layout } from 'antd';

import { Wrapper } from './styles';
import TopMenu from 'components/layouts/TopMenu';

const { Header, Footer, Content } = Layout;

type Props = {
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Layout>
        <Header>
          <TopMenu />
        </Header>
        <Content>
          { children }
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Wrapper>
  );
}

export default MainLayout;