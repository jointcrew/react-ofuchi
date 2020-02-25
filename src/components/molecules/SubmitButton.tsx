import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Button } from 'antd';
// antdesignのForm、Buttonコンポーネントの読み込み

interface ButtonProps {
  error: (names?: string[] | undefined) => Record<string, string[] | undefined>
  buttonlabel: string
  // propsの型定義
}



const SubmitButton: React.FC<ButtonProps> = (props) => {
  // 関数コンポーネントかつButtonPropsとして型定義を行いpropsを受け取る
  const hasErrors = (fieldsError: { [x: string]: unknown; }): boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  // fieldsErrorオブジェクトの名前部分を配列に変換して配列項目にエラーが出るかチェック
  const getFieldsError = props.error;
  // propsを代入

  return(
    <Form.Item>
      <Button htmlType="submit"  disabled={hasErrors(getFieldsError())}>
        {/* ボタンパーツのタイプ設定と活性化と非活性化を切り替える処理 */}
        {props.buttonlabel}
        {/* 親コンポーネントからラベルのpropsを受け取り表示 */}
      </Button>
    </Form.Item>
  )
}

export default SubmitButton;
// 他のコンポーネントでも使用できるようにexport