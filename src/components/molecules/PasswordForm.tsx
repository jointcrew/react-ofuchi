import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input } from 'antd';
// antdesignのForm、Inputコンポーネントの読み込み
import { GetFieldDecoratorOptions } from 'antd/lib/form/Form';
// 型定義に必要なtypeの読み込み

interface PasswordFormProps {
  passform: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  // propsの型定義
}

const PasswordForm: React.FC<PasswordFormProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型かつPasswordFormPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsを受け取る
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.passform;
  // propsを分割代入
  const passwordError: false | string[] | undefined = isFieldTouched("password") && getFieldError("password");
  // パスワードインプットフィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（emailErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  return(
    <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''} key={"password"}>
      {/* インプットにラベルとkeyを設定しpasswordErrorの値を利用して適切な動作でない場合にエラーメッセージを表示 */}
      {getFieldDecorator('password', {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please input your password!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
          {
            min: 8,
            message: 'Please enter a password of at least 8 characters',
            // 最小入力文字数を8文字として設定し8文字未満の場合に出力するエラーメッセージの設定
          },
        ],
      })(<Input placeholder="Password" type="password"/>)}
      {/* フォーム内に出力するplaceholderの設定とインプットタイプの設定 */}
    </Form.Item>
  )
}

export default PasswordForm;