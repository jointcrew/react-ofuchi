import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input } from 'antd';
// antdesignのForm、Inputコンポーネントの読み込み
import { FormComponentProps } from 'antd/es/form';
// antdesignの型定義読み込み

interface DecoratorProps extends FormComponentProps {
  // FormComponentPropsを継承した型定義設定
  form: any
  // エラー解消のため暫定で型定義
}

const PasswordForm: React.FC<DecoratorProps> = (props) => {
  // 関数コンポーネントかつDecoratorPropsとして型定義を行いpropsを受け取る
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  // propsを分割代入
  const passwordError: boolean = isFieldTouched("password") && getFieldError("password");
  // パスワードインプットフィールドをクリック後エラーが発生した場合にtrueを代入し、そうでない場合にfalseを代入
  return(
    <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
      {/* インプットにラベルを設定しpasswordErrorの値を利用して適切な動作でない場合にエラーメッセージを表示 */}
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