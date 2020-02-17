import React from 'react';
import MailForm from '../atoms/Mailform';
import PasswordForm from '../atoms/Passwordform';
import LogInButton from '../atoms/Button';

const Form: React.FC = () => {
  return(
    <div>
      <MailForm />
      <PasswordForm />
      <LogInButton />
    </div>
  )
}

export default Form;