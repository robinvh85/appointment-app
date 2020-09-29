import React, { useContext, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { get } from 'lodash';

import Spin from 'components/Spin';
import { StateContext } from 'store/contexts';
import { Wrapper } from './styles';
import SideBar from './Sidebar';
import Header from './Header';

const { Footer, Content } = Layout;

const MainLayout: React.FC<any> = ({ children }) => {
  // eslint-disable-next-line 
  const { state, dispatch } = useContext(StateContext);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(state) setLoading(get(state, ['common', 'loading']));
  }, [state]);

  return (
    <Wrapper>
      <Layout>
        <Header />
        <Layout style={{ padding: '8px 0px', minHeight: '100vh' }}>
          <SideBar />
          <Layout>
            <Content style={{padding: 16}}>
              <Spin loading={loading}>
                { children }
              </Spin>
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