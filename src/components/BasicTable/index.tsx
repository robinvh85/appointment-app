import React, { useState, useEffect } from 'react';
import { Table, Space, Modal } from 'antd';

import DeleteIcon from 'components/icons/DeleteIcon';
import EditIcon from 'components/icons/EditIcon';

type Props = {
  columns: any[],
  data: any[],
  onDelete?: (record: any) => void;
  onEdit?: (record: any) => void;
}

const BasicTable: React.FC<Props> = ({columns, data, onDelete, onEdit}) => {
  const [currentColumns, setCurrentColumns] = useState<null | any>(null);

  const actionsColumn = {
    title: '',
    key: 'action',
    width: 70,
    render: (text: string, record: any) => (
      <Space size="middle">
        { onEdit && <EditIcon onClick={() => onEdit(record)} /> }
        { onDelete && <DeleteIcon onClick={() => handleClickDelete(record)} /> }
      </Space>
    ),
  };

  useEffect(() => {
    setCurrentColumns([...columns, actionsColumn])
  }, [columns]) // eslint-disable-line
  
  const handleClickDelete = (record: any) => {
    Modal.confirm({
      title: 'Do you want to delete?',
      onOk() {
        onDelete && onDelete(record);
      }
    });
  }

  return (
    <Table 
      columns={currentColumns} 
      dataSource={data} 
      pagination={false}
      rowKey='id'
    />
  )
}

export default BasicTable;