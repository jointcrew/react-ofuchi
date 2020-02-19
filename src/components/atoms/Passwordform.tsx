import React from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';

interface DecoratorProps extends FormComponentProps {
  form: any
}

const PasswordForm: React.FC<DecoratorProps> = (props) => {
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  const passwordError = isFieldTouched("password") && getFieldError("password");
  return(
    <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
      {getFieldDecorator('password', {
        rules: [
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 8,
            message: 'Please enter a password of at least 8 characters',
          },
        ],
      })(<Input placeholder="Password" type="password"/>)}
    </Form.Item>
  )
}

export default PasswordForm;