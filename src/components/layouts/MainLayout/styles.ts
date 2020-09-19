import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .ant-layout-header {
    background-color: #108ee9;
    padding: 0;
    color: white;
    position: relative;

    .logo {
      margin-left: 20px;
    }

    .profile {
      color: white;
      position: absolute;
      right: 20px;
      top: 0px;
      font-size: 26px;
      cursor: pointer;
    }
  }

  .ant-menu-item {
    .anticon {
      font-size: 20px;
    }
  }
`;