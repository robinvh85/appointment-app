import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .ant-layout-header {
    background-color: white;
    padding: 0;
    color: grey;
    position: relative;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.20));

    .logo {
      color: #1890ff;
      margin-left: 20px;
    }

    .profile {
      color: #1890ff;
      position: absolute;
      right: 20px;
      top: 0px;

      & > svg {
        margin-top: 18px;
        font-size: 26px;
        cursor: pointer;
      }
    }
  }

  .ant-menu-item {
    .anticon {
      font-size: 20px;
    }
  }
`;