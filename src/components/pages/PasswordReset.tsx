import React, { useEffect } from 'react';
// reactのコードを機能させる為に必要なコンポーネントの読み込み
import { Form } from 'antd';
// antdesignのFormコンポーネントの読み込み
import { FormComponentProps } from 'antd/lib/form';
// antdesignの型定義読み込み
import GoBackButton from '../atoms/GoBackButton';
// 戻るボタン用のコンポーネントの読み込み
import MailForm from '../molecules/MailForm';
// メールアドレス用のインプットコンポーネントの読み込み
import SubmitButton from '../atoms/SubmitButton';
// ボタンコンポーネントの読み込み


const PasswordResetForm: React.FC<FormComponentProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型かつantdesign用の型定義として、returnをreact側で定義しているJSX.Element型として型定義を行いpropsを受け取る
  useEffect((): void => {
    // returnを返さないためreturnをvoid型で型定義
    props.form.validateFields()
    // 各フォームのエラーと値を取得するvalidateFieldsを使用してフォームに何も入力されていない場合のレンダリング時にバリデーションを発生させてボタンを非活性化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // consoleのwarningをlintの無効化で対応
  
  const handleSubmit = (e: React.FormEvent): void => {
    // onSubmitで使用する引数eをReact.FormEvent型、returnを返さないためreturnをvoid型で型定義
    e.preventDefault();
    // 規定のボタン押下処理（画面遷移処理）をブロック
    props.form.validateFields((errors: boolean, values: object): void => {
      // 各フォームのエラーと値を取得するvalidateFieldsを使用して各フォームのboolean型に型定義したerrorsとobject型に型定義したvaluesを取得
      if (!errors) {
        console.log(values);
        // errorsがfalseであれば各フォームのvaluesをコンソールに出力
      }
    });
  };
  
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // propsを分割代入
    return (
    <Form onSubmit={handleSubmit}>
      {/* ボタンを押下した際の動作を設定 */}
      <GoBackButton />
      {/* 戻るボタンコンポーネントを出力 */}
      <p>パスワードをお忘れの場合はご登録いただいているメールアドレスを下記入力欄に入力していただき送信ボタンをクリックしてください。</p>
      <p>入力いただいたメールアドレス宛に再設定用メールをお送りいたします。</p>
      <MailForm mailform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとして名前と値を同一名称にしたショートハンドのオブジェクトmailformを子コンポーネントを渡す */}
      <SubmitButton error={getFieldsError}  buttonLabel="E-Mail Send"/>
      {/* propsとしてerrorとbuttonLabelを子コンポーネントに渡す */}
      {/* コンポーネントを出力してpropsを各コンポーネントに渡す */}
    </Form>
  )
}
const PasswordReset = Form.create({ name: 'PasswordResetForm' })(PasswordResetForm);
// 高階コンポーネントとしてPasswordResetFormコンポーネントにpropsを設定してPasswordResetに代入

export default PasswordReset;
// 他のコンポーネントで使用できるようにexport（元のコンポーネント名ではなく高階コンポーネントとして設定したコンポーネント名でエクスポート）