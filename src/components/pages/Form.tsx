import React from 'react';
import MailForm from '../atoms/Mailform';
import PasswordForm from '../atoms/Passwordform';

const Form: React.FC = () => {
  return(
    <div>
      <MailForm />
      <PasswordForm />
    </div>
  )
}

export default Form;