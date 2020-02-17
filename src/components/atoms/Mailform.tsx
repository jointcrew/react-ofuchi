import React from 'react';
import { Form, Input } from 'antd';

const MailForm: React.FC = () => {
  return(
    <Form>
      <Form.Item>
        <Input placeholder="E-mail"/>
      </Form.Item>
    </Form>
  )
}

export default MailForm;