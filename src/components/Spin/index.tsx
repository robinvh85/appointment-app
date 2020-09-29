import React from 'react';
import { Spin as SpinAnt } from 'antd';

const Spin: React.FC<any> = ({ children, loading=false }) => {
  return (
    <SpinAnt spinning={loading} tip='loading ...'>
      { children }
    </SpinAnt>
  )
}

export default Spin;