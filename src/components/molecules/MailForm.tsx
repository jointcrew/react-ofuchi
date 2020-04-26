import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input } from 'antd';
// antdesignのForm、Inputコンポーネントの読み込み
import { GetFieldDecoratorOptions } from 'antd/lib/form/Form';
// 型定義に必要なtypeの読み込み

interface MailFormProps {
  mailform: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  // propsの型定義
}

const MailForm: React.FC<MailFormProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型かつMailFormPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsを受け取る
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.mailform;
  // 受け取ったpropsを分割代入
  const emailError:  false | string[] | undefined = isFieldTouched('email') && getFieldError('email');
  // メールインプットフィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（emailErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  return(
    <Form.Item label="E-mail" validateStatus={emailError ? 'error' : ''} help={emailError || ''} key={"email"}>
      {/* インプットにラベルとkeyを設定しemailErrorの値を利用して適切な動作でない場合にエラーメッセージを表示 */}
      {getFieldDecorator('email', {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please input your E-mail!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
            // インプットタイプとそれにそぐわない入力内容の際に出力するエラーメッセージの設定（〇〇＠〇〇.〇〇の形式でなければエラーメッセージ表示）
          },
        ],
      })(<Input placeholder="E-mail"/>)}
      {/* フォーム内に出力するplaceholderの設定 */}
    </Form.Item>
  )
}

export default MailForm;
// 他のコンポーネントでも使用できるようにexport