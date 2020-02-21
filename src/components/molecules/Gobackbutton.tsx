import React from 'react';
// reactのコードを機能させる為に必要なコンポーネントの読み込み
import { Form, Button } from 'antd';
// antdesignのForm、Buttonコンポーネントの読み込み
import { RouteComponentProps, withRouter } from 'react-router-dom';
// historyAPIを使用するための型定義と高階コンポーネントの読み込み



const GoBackButton: React.FC<RouteComponentProps> = (props) => {
  // 関数コンポーネントかつantdesign用の型定義設定とpropsの受け取り
  const handleGoBack = () => {
    props.history.goBack()
    // ブラウザヒストリーを使用して一つ前のページに戻る
  }
  return(
    <Form.Item>
      <Button onClick={handleGoBack}>
        {/* ボタンパーツのタイプ設定とボタンクリック時に一つ前のページに戻る処理 */}
        戻る
      </Button>
    </Form.Item>
  )
}

export default withRouter(GoBackButton);
// PasswordResetコンポーネントのprops.historyを使用するために高階コンポーネントとしてエクスポート