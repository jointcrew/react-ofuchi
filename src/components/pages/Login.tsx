import React, { useEffect } from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form } from 'antd';
// antdesignのFormコンポーネントの読み込み
import { FormComponentProps } from 'antd/es/form';
// antdesignの型定義読み込み
import { Link } from 'react-router-dom';
// ルーティング用コンポーネントの読み込み
import { routePath } from '../../constants/Route';
// ページUR用Lコンポーネントの読み込み
import MailForm from '../molecules/Mailform';
// メールアドレス用のインプットコンポーネントの読み込み
import PasswordForm from '../molecules/Passwordform';
// パスワード用のインプットコンポーネントの読み込み
import SubmitButton from '../molecules/Submitbutton';
// ボタンコンポーネントの読み込み



const LoginForm: React.FC<FormComponentProps> = (props) => {
  // 関数コンポーネントかつantdesign用の型定義設定とpropsの受け取り

  useEffect(() => {
    props.form.validateFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //初回レンダリング時のボタン非活性化（warningをlintの無効化で対応）
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // 規定のボタン押下処理（画面遷移処理）をブロック
    props.form.validateFields((errors: boolean, values: object) => {
      // 各フォームのエラーと値を取得
      if (!errors) {
        console.log(values);
        // エラーが発生していなければ各フォームの値（オブジェクト形式）をコンソールに出力
      }
    });
  };




  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // propsを分割代入
  return(
    <Form onSubmit={handleSubmit}>
      {/* ボタンを押下した際の動作を設定 */}
      <MailForm mailform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      <PasswordForm passform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      <SubmitButton error={getFieldsError} buttonlabel="Login"/>
      {/* コンポーネントを出力してpropsを各コンポーネントに渡す */}
      <p><Link to={routePath.PASSWORD_RESET}>パスワードをお忘れの方はこちら</Link></p>
      {/* パスワード忘れページへの導線処理 */}
    </Form>
  )
}

const Login = Form.create({ name: 'LoginForm' })(LoginForm);
// 高階コンポーネントとしてLoginFormコンポーネントにpropsを設定してそれを利用してvalidateを行うための情報取得



export default Login;
// 他のコンポーネントで使用できるようにexport（元のコンポーネント名ではなく高階コンポーネントとして設定したコンポーネント名でエクスポート）