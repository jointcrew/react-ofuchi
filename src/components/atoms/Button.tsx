import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';

interface ButtonProps extends FormComponentProps {
  form: any
}

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const LogInButton: React.FC<ButtonProps> = (props) => {
  // const [button, setButton] = useState({disabled: true});
  // if(1 < 0) {
  //   setButton({disabled: false})
  // }else{
  //   setButton({disabled: true})
  // }
  const { getFieldsError } = props.form;
  return(
      <Form.Item>
        <Button htmlType="submit"  disabled={hasErrors(props.form)}>
          LogIn
        </Button>
      </Form.Item>
  )
}

export default LogInButton;