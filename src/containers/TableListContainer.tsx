import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import TableList from "components/pages/TableList";
// 一覧表示用のコンポーネントを読み込み
const TableListContainer: React.FC = ():JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義として、returnをreact側で定義しているJSX.Element型として型定義を行う
  const json = require('./TableList.json');
  // json形式のデータをjsonに代入
  
  return(
    <TableList listData={json}/>
    // TableListコンポーネントにpropsを渡して出力
  )
}

export default TableListContainer;
// 他のコンポーネントでも使用できるようにexport