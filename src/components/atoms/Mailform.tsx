import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input } from 'antd';
// antdesignのForm、Inputコンポーネントの読み込み
import { FormComponentProps } from 'antd/es/form';
// antdesignの型定義読み込み

interface MailFormProps extends FormComponentProps {
  // FormComponentPropsを継承した型定義設定
  form: any
  // エラー解消のため暫定での型定義
}

const MailForm: React.FC<MailFormProps> = (props) => {
  // 関数コンポーネントかつDecoratorPropsとして型定義を行いpropsを受け取る
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  // 受け取ったpropsを分割代入
  const emailError: boolean = isFieldTouched('email') && getFieldError('email');
  // メールインプットフィールドをクリック後エラーが発生した場合にtrueを代入し、そうでない場合はfalseを代入
  return(
    <Form.Item label="E-mail" validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
      {/* インプットにラベルを設定しemailErrorの値を利用して適切な動作でない場合にエラーメッセージを表示 */}
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
            // インプットタイプとそれにそぐわない入力内容の際に出力するエラーメッセージの設定（〇〇＠〇〇.〇〇の形式）
          },
        ],
      })(<Input placeholder="E-mail"/>)}
      {/* フォーム内に出力するplaceholderの設定 */}
    </Form.Item>
  )
}

export default MailForm;
// 他のコンポーネントでも使用できるようにexport