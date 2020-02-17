import React from 'react';
import { Form, Input } from 'antd';

const PasswordForm: React.FC = () => {
  return(
    <Form>
      <Form.Item>
        <Input placeholder="Password"/>
      </Form.Item>
    </Form>
  )
}

export default PasswordForm;