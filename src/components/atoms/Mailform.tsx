import React from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';

interface DecoratorProps extends FormComponentProps {
  form: any
}

const MailForm: React.FC<DecoratorProps> = (props) => {
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  const emailError = isFieldTouched('email') && getFieldError('email');
  return(
    <Form.Item label="E-mail" validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
      {getFieldDecorator('email', {
        rules: [
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ],
      })(<Input placeholder="E-mail"/>)}
    </Form.Item>
  )
}

export default MailForm;