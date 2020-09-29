import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

const List: React.FC<any> = ({data}) => {
  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      pagination={false}
    />
  )
}

export default List;