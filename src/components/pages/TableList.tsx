import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Table } from "antd";
// antdesignのTableコンポーネントの読み込み

interface ListDataProps {
  listData: unknown[];
  // unknown型の配列として型定義
}

const TableList: React.FC<ListDataProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義かつinterFaceで設定したListDataPropsとして、returnをreact側で定義しているJSX.Element型として型定義を行いpropsの受け取る
  const columnsData = [
    {
      title: "名前",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年齢",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住所",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "性別",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "職業",
      dataIndex: "job",
      key: "job"
    }
  ];
  // antdesignのTableコンポーネントで使用するcolumns属性に設定する配列の代入
  // title：Tableコンポーネントのヘッダー項目に表示する内容
  // dataIndex：各列の各枠に表示する内容
  // key：各列ごとに設定するキー
  return(
    <Table dataSource={props.listData} columns={columnsData} pagination={false}/>
    // antdesignのTableコンポーネントを出力
    // dataSource：テーブルの各項目に表示するデータ内容の設定
    // columns：各列ごとのヘッダー内容、各枠表示内容、各列ごとのキーの設定
    // pagination：ページネイションの設定（falseの場合はページネイションを表示しない）
  )
}

export default TableList;
// 他のコンポーネントでも使用できるようにexport