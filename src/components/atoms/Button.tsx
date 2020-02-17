import React from 'react';
import { Form, Button } from 'antd';

const LogInButton: React.FC = () => {
  return(
    <Form>
      <Form.Item>
        <Button>
          LogIn
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LogInButton;