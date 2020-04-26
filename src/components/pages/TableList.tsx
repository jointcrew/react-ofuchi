import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
// antdesignのTableコンポーネントの読み込み
import { useHistory } from "react-router-dom";
// hooksのヒストリーをしようするためのコンポーネントの読み込み
import { ListData, ColumnsData } from "containers/TableListContainer";
// TableListContainerから型定義のinterfaceをimport
import { routePath } from "constants/Route";
// URLパス定義の読み込み

interface TableDataProps {
  listData: ListData[];
  // TableListContainerからimportしたListDataで定義した値の型定義を持つ配列として型定義
  columnsData: ColumnsData[];
  // TableListContainerからimportしたColumnsDataで定義した値の型定義を持つ配列として型定義

}

const TableList: React.FC<TableDataProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義かつinterFaceで設定したTableDataPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsの受け取る
  const history = useHistory();
  // hooksのuseHistoryを使用してブラウザヒストリーをhistoryに代入
  return(
    <Table dataSource={props.listData} columns={props.columnsData} pagination={false} onRow={(record, index) => {
      // 引数recordとindexを設定
      return {
      onClick: () => {history.push(`${routePath.TABLE_LIST}${routePath.DETAIL}/${index + 1}`, {tableDataProps: record})}
      // クリックした際に指定したURLへの遷移とlocationへのstate設定を行う
      // index番号は0から始まるため+1した数値をURLとして設定
      // tableDataPropsをkey、クリックした行の各セルの情報をオブジェクトの値としてstateに設定
      }
    }}/>
    // antdesignのTableコンポーネントを出力
    // dataSource：テーブルの各項目に表示するデータ内容の設定
    // columns：各列ごとのヘッダー内容、各枠表示内容、各列ごとのキーの設定
    // pagination：ページネイションの設定（falseの場合はページネイションを表示しない）
    // onRow：各行ごとのイベントを設定（onClick：各行をクリック時のイベント設定）
  )
}

export default TableList;
// 他のコンポーネントでも使用できるようにexport