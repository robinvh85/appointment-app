import React from 'react';
import { Layout } from 'antd';

import { Wrapper } from './styles';
import SideBar from './Sidebar';
import Header from './Header';

const { Footer, Content } = Layout;
type Props = {
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Layout>
        <Header />
        <Layout style={{ padding: '8px 0px', minHeight: '100vh' }}>
          <SideBar />
          <Layout>
            <Content style={{padding: 16}}>
              <>
                { children }
              </>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Appointment ©2020
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Wrapper>
  );
}

export default MainLayout;