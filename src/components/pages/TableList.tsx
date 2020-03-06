import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
// antdesignのTableコンポーネントの読み込み

interface ListDataProps {
  key: number;
  name: string;
  age: number,
  address: string;
  gender: string;
  job: string;
}
// TableListContainerから受け取るprops.listDataの値の型定義

interface ColumnsDataProps {
  title: string;
  dataIndex: string;
  key: string;
  sorter: (a: unknown, b: unknown) => number;
}
// TableListContainerから受け取るprops.columnsDataの値の型定義

interface TableDataProps {
  listData: ListDataProps[];
  // ListDataPropsで定義した値の型定義を持つ配列として型定義
  columnsData: ColumnsDataProps[];
  // ColumnsDataPropで定義した値の型定義を持つ配列として型定義
}

const TableList: React.FC<TableDataProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義かつinterFaceで設定したListDataPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsの受け取る
  return(
    <Table dataSource={props.listData} columns={props.columnsData} pagination={false}/>
    // antdesignのTableコンポーネントを出力
    // dataSource：テーブルの各項目に表示するデータ内容の設定
    // columns：各列ごとのヘッダー内容、各枠表示内容、各列ごとのキーの設定
    // pagination：ページネイションの設定（falseの場合はページネイションを表示しない）
  )
}

export default TableList;
// 他のコンポーネントでも使用できるようにexport