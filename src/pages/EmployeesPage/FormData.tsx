import React, { useRef } from 'react';
import { Form, Input, message, Modal } from 'antd';
import axios from 'axios';
import { API_DOMAIN, MESSAGE_DELAY_TIME } from 'constants/app';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

type Props = {
  visible: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  onError?: () => void;
}

const FormData: React.FC<Props> = ({ visible, onCancel, onSuccess, onError }) => {
  const formRef = useRef(null);

  const onFinish = (values: any) => {
    axios.post(`${API_DOMAIN}/employees`, values)
    .then(function (response) {
      message.success('Success', MESSAGE_DELAY_TIME);
      onSuccess();
    })
    .catch(function (error) {
      message.error('There are some errors', MESSAGE_DELAY_TIME);
      onError && onError();
    });
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
      >
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