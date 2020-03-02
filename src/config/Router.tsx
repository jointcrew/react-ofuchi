import React from 'react';
// reactのコードを機能させるために必要なコンポーネントの読み込み
import {Route, Redirect} from "react-router-dom";
// 各コンポーネントへのルーティング設定に必要なコンポーネントの読み込み
import {routePath} from '../constants/Route';
// 各コンポーネントへのルーティング用URLパスの読み込み
import Header from 'components/organisms/Header';
// 各ページに表示するヘッダーコンポーネントの読み込み
import Main from '../components/pages/Main';
// トップページにアクセスした際に表示するコンポーネントの読み込み
import List from '../components/pages/List';
// 各ギャラリーページにアクセスした際に表示するコンポーネントの読み込み
import Login from '../components/pages/Login';
// ログインページにアクセスした際に表示するコンポーネントの読み込み
import PasswordReset from '../components/pages/PasswordReset';
// パスワードリセットページにアクセスした際に表示するコンポーネントの読み込み

export const Router: React.FC = (): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型、returnをreact側で定義しているJSX.Element型で型定義を行い他のコンポーネントでも関数を使用できるようにエクスポート
  return(
    <>
      <Route exact path={routePath.PAGE_DEFAULT}>
        {/* pathで指定しているURLにアクセスした場合のみに下記を実行 */}
        <Redirect to={routePath.LOGIN}/>
        {/* Routeコンポーネントのpathで指定しているURLにアクセスした場合のみ、toで指定したURLにルーティング */}
      </Route>
      <Route exact path={[
        routePath.PAGE_TOP,
        `${routePath.GALLERY}/:id`
      ]} component={Header} />
      {/* pathで指定しているURL（トップページ・ギャラリーページ）にルートした場合のみHeaderコンポーネントを表示 */}
      <Route exact path={routePath.PAGE_TOP} component={Main} />
      {/* path属性で指定しているURLにアクセスした場合のみMainコンポーネントの内容を表示するようにルートを設定 */}
      <Route exact path={`${routePath.GALLERY}/:id`} component={List}/>
      {/* path属性で指定している文字列を含むURL（:idの部分については別コンポーネントで指定）にアクセスした際にListコンポーネントの内容を表示するようにルートを設定 */}
      <Route path={routePath.LOGIN} component={Login}/>
      {/* path属性で指定している文字列を含むURLにアクセスした際にLoginコンポーネントの内容を表示するようにルートを設定 */}
      <Route exact path={routePath.PASSWORD_RESET} component={PasswordReset}/>
      {/* path属性で指定している文字列を含むURLにアクセスした際にPasswordResetコンポーネントの内容を表示するようにルートを設定 */}
    </>
  )

}