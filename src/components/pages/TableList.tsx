import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";
// antdesignのTableコンポーネントの読み込み

interface ListDataProps {
  listData: unknown[];
  // unknown型の配列として型定義
  columnsData: ColumnProps<unknown>[];
  // antdesignで定義しているColumnPropsのジェネリクスの型引数をunknown型に設定し、unknown型の配列として型定義
}

const TableList: React.FC<ListDataProps> = (props): JSX.Element => {
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