import React from 'react';

import BasicTable from 'components/BasicTable';

type Props = {
  data: any[];
  onDelete?: (record: any) => void;
  onEdit?: (record: any) => void;
}

const List: React.FC<Props> = ({data, onDelete, onEdit}) => {
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
  
  const handleEdit = (record: any) => {
    onEdit && onEdit(record);
  }

  const handleDelete = (record: any) => {
    onDelete && onDelete(record);
  }

  return (
    <BasicTable 
      columns={columns} 
      data={data} 
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  )
}

export default List;