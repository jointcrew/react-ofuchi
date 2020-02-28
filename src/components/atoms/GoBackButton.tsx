import React from 'react';
// reactのコードを機能させる為に必要なコンポーネントの読み込み
import { Button } from 'antd';
// antdesignのForm、Buttonコンポーネントの読み込み
import { useHistory } from 'react-router-dom';
// useHistoryAPIを使用するための読み込み



const GoBackButton: React.FC = (): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型、戻り値をreact側で定義しているJSX.Element型に型定義設定
  const history = useHistory();
  // hooksのuseHistoryを使用してブラウザヒストリーをhistoryに代入
  const handleGoBack = (): void => {
    // return文がなくundefinedとなるためreturnをvoid型で型定義
    history.goBack()
    // historyに代入したブラウザヒストリーを使用して一つ前のページに戻る
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