import React from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import MailForm from '../atoms/Mailform';
import PasswordForm from '../atoms/Passwordform';
import LogInButton from '../atoms/Button';

interface FormProps extends FormComponentProps{}

const LogInForm: React.FC<FormProps> = (props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return(
    <Form onSubmit={handleSubmit}>
      <MailForm />
      <PasswordForm />
      <LogInButton />
    </Form>
  )
}

const WrappedLogInForm = Form.create({ name: 'login_form' })(LogInForm);


export default WrappedLogInForm;