import React from 'react';
import { Form } from 'antd';
import { FormComponentProps} from 'antd/es/form';
import MailForm from '../atoms/Mailform';
import PasswordForm from '../atoms/Passwordform';
import LogInButton from '../atoms/Button';

interface FormProps extends FormComponentProps{}

const LogInForm: React.FC<FormProps> = (props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((errors: boolean, values: object) => {
      if (!errors) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  return(
    <Form onSubmit={handleSubmit}>
      <MailForm form={{getFieldDecorator, getFieldError, isFieldTouched}} getFieldDecorator/>
      <PasswordForm form={{getFieldDecorator, getFieldError, isFieldTouched}} getFieldDecorator/>
      <LogInButton form={getFieldsError} />
    </Form>
  )
}

const WrappedLogInForm = Form.create({ name: 'login_form' })(LogInForm);


export default WrappedLogInForm;