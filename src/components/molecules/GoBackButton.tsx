import React from 'react';
// reactのコードを機能させる為に必要なコンポーネントの読み込み
import { Button } from 'antd';
// antdesignのForm、Buttonコンポーネントの読み込み
import { useHistory } from 'react-router-dom';
// useHistoryAPIを使用するための読み込み



const GoBackButton: React.FC = () => {
  // 関数コンポーネントの型定義設定
  const history = useHistory();
  // hooksのuseHistoryを使用してブラウザヒストリーをhistoryに代入
  const handleGoBack = () => {
    history.goBack()
    // 定数historyに代入したブラウザヒストリーを使用して一つ前のページに戻る
  }
  return(
      <Button onClick={handleGoBack}>
        {/* ボタンクリック時に一つ前のページに戻る処理 */}
        戻る
      </Button>
  )
}

export default GoBackButton;
// 他のコンポーネントでも使用できるようにexport