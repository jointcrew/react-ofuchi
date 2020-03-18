import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Button } from 'antd';
// antdesignのButtonコンポーネントの読み込み

interface ButtonProps {
  error: (names?: string[] | undefined) => Record<string, string[] | undefined>
  // 関数型として型定義（引数nameに値が入っている場合はstring型の配列もしくはundefined型、returnのオブジェクトのキーをstring型、値をstring型の配列もしくはundefined型として型定義）
  buttonLabel: string
  // 親コンポーネントから受け取るpropsをstring型として型定義
  // propsの型定義
}



const SubmitButton: React.FC<ButtonProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型かつButtonPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsを受け取る

  const requiredFormList = ["email", "password", "usernameselect", "number", "date", "booleanselect", "input"]

  const hasErrors = (fieldsError: { [x: string]: unknown; }): boolean => {
    // fieldsErrorにあるstring型のインデックスxの値をunknown型、returnをboolean型として型定義
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  // fieldsErrorオブジェクトの名前部分を配列に変換して配列項目にエラーが出るかチェック
  const getFieldsError = props.error;
  // propsを代入

  return(
      <Button htmlType="submit"  disabled={hasErrors(getFieldsError(requiredFormList))}>
        {/* ボタンパーツのタイプ設定と活性化と非活性化を切り替える処理 */}
        {props.buttonLabel}
        {/* 親コンポーネントからラベルのpropsを受け取り表示 */}
      </Button>
  )
}

export default SubmitButton;
// 他のコンポーネントでも使用できるようにexport