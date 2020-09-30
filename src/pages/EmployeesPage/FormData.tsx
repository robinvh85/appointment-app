import React, { useRef } from 'react';
import { Form, Input, Modal } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type Props = {
  visible: boolean;
  values?: any;
  onCancel: () => void;
  onCreate?: (values: any) => void;
  onUpdate?: (values: any) => void;
}

const FormData: React.FC<Props> = ({ visible, values, onCancel, onCreate, onUpdate }) => {
  const formRef = useRef(null);

  const onFinish = (values: any) => {
    if(values.id) {
      onUpdate && onUpdate(values);
    } else {
      onCreate && onCreate(values);
    }
  };

  const handleOk = () => {
    (formRef as any).current.submit();
  }

  return (
    <Modal 
      title='New employee'
      visible={visible} 
      onCancel={onCancel}
      maskClosable={false}
      onOk={handleOk}
    >
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        ref={formRef}
        initialValues={values}
      >
        <Form.Item name="id" hidden={true}>
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name' }]}
        >
          <Input maxLength={50} />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input address' }]}
        >
          <Input maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FormData;