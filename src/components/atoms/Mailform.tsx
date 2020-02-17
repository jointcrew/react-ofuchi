import React from 'react';
import { Form, Input } from 'antd';


const MailForm: React.FC = () => {
  return(
      <Form.Item>
        <Input placeholder="E-mail"/>
      </Form.Item>
  )
}

export default MailForm;