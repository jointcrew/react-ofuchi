import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { BrowserRouter } from 'react-router-dom';
// ルーティング用コンポーネントの読み込み
import './App.css';
// cssファイルの読み込み
import 'antd/dist/antd.css';
// antデザイン用のcssファイルの読み込み
import {Router} from './config/Router';
// ルーティングとページ出力に必要なコンポーネントの読み込み



const App: React.FC = (): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型、returnをreact側で定義しているJSX.Element型で型定義
  return (
    <BrowserRouter>
    {/* ルーティングを動作させるために必要なコンポーネントを記載 */}
      <Router />
      {/* 各URLにルーティングした際のページ出力とURLパスを記載したコンポーネントの出力 */}
    </BrowserRouter>
  );
}

export default App;
// 他のコンポーネントでも使用できるようにエクスポート