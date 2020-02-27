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
import MailForm from '../molecules/MailForm';
// メールアドレス用のインプットコンポーネントの読み込み
import PasswordForm from '../molecules/PasswordForm';
// パスワード用のインプットコンポーネントの読み込み
import SubmitButton from '../atoms/SubmitButton';
// ボタンコンポーネントの読み込み



const LoginForm: React.FC<FormComponentProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型かつantdesign用の型定義として、returnをreact側で定義しているJSX.Element型として型定義を行いpropsの受け取る

  useEffect((): void => {
    // returnを返さないためreturnをvoid型で型定義
    props.form.validateFields()
    // 各フォームのエラーと値を取得するvalidateFieldsを使用してフォームに何も入力されていない場合のレンダリング時にバリデーションを発生させてボタンを非活性化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //初回レンダリング時のボタン非活性化（warningをlintの無効化で対応）
  
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
  return(
    <Form onSubmit={handleSubmit}>
      {/* ボタンを押下した際の動作を設定 */}
      <MailForm mailform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとして名前と値を同一名称にしたショートハンドのオブジェクトmailformを子コンポーネントに渡す */}
      <PasswordForm passform={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとして名前と値を同一名称にしたショートハンドのオブジェクトpassformを子コンポーネントに渡す */}
      <SubmitButton error={getFieldsError} buttonLabel="Login"/>
      {/* propsとしてerrorとbuttonLabelを子コンポーネントに渡す */}
      {/* コンポーネントを出力してpropsを各コンポーネントに渡す */}
      <p><Link to={routePath.PASSWORD_RESET}>パスワードをお忘れの方はこちら</Link></p>
      {/* パスワード忘れページへの導線処理 */}
    </Form>
  )
}

const Login = Form.create({ name: 'LoginForm' })(LoginForm);
// 高階コンポーネントとしてLoginFormコンポーネントにpropsを設定してLoginに代入



export default Login;
// 他のコンポーネントで使用できるようにexport（元のコンポーネント名ではなく高階コンポーネントとして設定したコンポーネント名でエクスポート）