import React, { useEffect } from 'react';
// reactのコードを機能させる為に必要なコンポーネントの読み込み
import { Form } from 'antd';
// antdesignのFormコンポーネントの読み込み
import { FormComponentProps } from 'antd/lib/form';
// antdesignの型定義読み込み
import GoBackButton from '../molecules/GoBackButton';
// 戻るボタン用のコンポーネントの読み込み
import MailForm from '../molecules/MailForm';
// メールアドレス用のインプットコンポーネントの読み込み
import SubmitButton from '../molecules/SubmitButton';
// ボタンコンポーネントの読み込み


const PasswordResetForm: React.FC<FormComponentProps> = (props) => {
  // 関数コンポーネントかつantdesign用の型定義を行いpropsを受け取る
  useEffect(() => {
    props.form.validateFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //初回レンダリング時のボタン非活性化（warningをlintの無効化で対応）
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // 規定のボタン押下処理（画面遷移処理）をブロック
    props.form.validateFields((errors: boolean, values: object) => {
      // フォームのエラーと値を取得
      if (!errors) {
        console.log(values);
        // エラーが発生していなければ各フォームの値（オブジェクト形式）をコンソールに出力
      }
    });
  };
  
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // propsを分割代入
    return (
    <Form onSubmit={handleSubmit}>
      <GoBackButton />
      {/* 戻るボタンコンポーネントを出力 */}
      <p>パスワードをお忘れの場合はご登録いただいているメールアドレスを下記入力欄に入力していただき送信ボタンをクリックしてください。</p>
      <p>入力いただいたメールアドレス宛に再設定用メールをお送りいたします。</p>
      <MailForm mailform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      <SubmitButton error={getFieldsError}  buttonlabel="E-Mail Send"/>
      {/* コンポーネントを出力してpropsを各コンポーネントに渡す */}
    </Form>
  )
}
const PasswordReset = Form.create({ name: 'PasswordResetForm' })(PasswordResetForm);
// 高階コンポーネントとしてPasswordResetFormコンポーネントにpropsを設定してそれを利用してvalidateを行うための情報取得

export default PasswordReset;
// 他のコンポーネントで使用できるようにexport（元のコンポーネント名ではなく高階コンポーネントとして設定したコンポーネント名でエクスポート）