import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input } from "antd";
// antdesignのForm、Inputコンポーネントの読み込み
import { GetFieldDecoratorOptions } from "antd/es/form/Form";
// 型定義に必要なtypeの読み込み

interface InputFormProps {
  inputForm: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  defaultData: string;
  // propsの型定義
}

const InputForm:React.FC<InputFormProps> = (props):JSX.Element => {
  // 関数コンポーネントをReact.FCかつInputFormPropsとして、returnをJSX.Elementとして型定義
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.inputForm;
  // 受け取ったpropsを分割代入
  const inputError:  false | string[] | undefined = isFieldTouched('input') && getFieldError('input');
  // インプットフィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（inputErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  return(
    <Form.Item validateStatus={inputError ? 'error' : ''} help={inputError || ''} key={"input"}>
      {/* フォームにkeyを設定し、inputErrorがtrueであればエラーメッセージを表示 */}
      {getFieldDecorator('input', {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please input more text!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
        ],
        initialValue: props.defaultData,
        // propsとして受け取ったdefaultDataをフォームの初期値として設定
      })(<Input />)}
      {/* antdesignのインプットフォームを出力 */}
    </Form.Item>
  )
}

export default InputForm;
// 他のコンポーネントでも使用できるようにexport