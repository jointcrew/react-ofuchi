import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
// antdesignのTableコンポーネントの読み込み
import { ListData, ColumnsData } from "containers/TableListContainer";
// TableListContainerから型定義のinterfaceをimport

interface TableDataProps {
  listData: ListData[];
  // TableListContainerからimportしたListDataで定義した値の型定義を持つ配列として型定義
  columnsData: ColumnsData[];
  // TableListContainerからimportしたColumnsDataで定義した値の型定義を持つ配列として型定義
  clickAction: (record) => void;
  // 関数型として型定義、return文がなくundefinedとなるためreturnをvoid型で型定義
  // TableListContainerから受け取るprops.clickActionの型定義
}

const TableList: React.FC<TableDataProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義かつinterFaceで設定したTableDataPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsの受け取る
  return(
    <Table dataSource={props.listData} columns={props.columnsData} pagination={false} onRow={() => {
      return {
      onClick: props.clickAction
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