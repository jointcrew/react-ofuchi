import React, {useState} from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { hasErrors } from '../pages/Form';

interface ButtonProps extends FormComponentProps {
  form: any
}


const LogInButton: React.FC<ButtonProps> = (props) => {
  const { getFieldsError } = props.form;
  const [button, setButton] = useState({disabled: true});
  if(getFieldsError === true) {
    setButton({disabled: false})
    console.log(button);
  }else{
    console.log(hasErrors(button));
  }
  return(
    <Form.Item>
      <Button htmlType="submit"  disabled={hasErrors(button)}>
        LogIn
      </Button>
    </Form.Item>
  )
}

export default LogInButton;