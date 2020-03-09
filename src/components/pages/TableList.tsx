import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
// antdesignのTableコンポーネントの読み込み

interface ListDataProps {
  key: string;
  // 文字列型として型定義
  name: string;
  // 文字列型として型定義
  age: string;
  // 文字列型として型定義
  address: string;
  // 文字列型として型定義
  gender: string;
  // 文字列型として型定義
  job: string;
  // 文字列型として型定義
}
// TableListContainerから受け取るprops.listDataの値の型定義

interface ColumnsDataProps {
  title: string;
  // 文字列型として型定義
  dataIndex: string;
  // 文字列型として型定義
  key: string;
  // 文字列型として型定義
  sorter: (a: ListDataProps, b: ListDataProps) => number;
  // 引数a、bをListDataPropsで定義した型、returnを数値型として持つ関数として型定義
}
// TableListContainerから受け取るprops.columnsDataの値の型定義

interface TableDataProps {
  listData: ListDataProps[];
  // ListDataPropsで定義した値の型定義を持つ配列として型定義
  columnsData: ColumnsDataProps[];
  // ColumnsDataPropで定義した値の型定義を持つ配列として型定義
  clickAction: () => void;
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