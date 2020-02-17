import React from 'react';
import { Form, Button } from 'antd';

const LogInButton: React.FC = () => {
  return(
      <Form.Item>
        <Button htmlType="submit">
          LogIn
        </Button>
      </Form.Item>
  )
}

export default LogInButton;