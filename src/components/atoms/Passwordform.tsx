import React from 'react';
import { Form, Input } from 'antd';

const PasswordForm: React.FC = () => {
  return(
      <Form.Item>
        <Input placeholder="Password"/>
      </Form.Item>
  )
}

export default PasswordForm;