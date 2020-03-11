import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import TableList from "components/pages/TableList";
// 一覧表示用のコンポーネントを読み込み
import { useHistory } from "react-router-dom";
// useHistoryAPIを使用するための読み込み
import { routePath } from "constants/Route";
// 各コンポーネントへのルーティング用URLパスの読み込み
import TableListData from "./TableListData.json";
// jsonデータの読み込み

export interface ListData {
  key: number;
  // 数値型として型定義
  name: string;
  // 文字列型として型定義
  age: number;
  // 数値型として型定義
  birthday: string;
  // 文字列型として型定義
  gender: string;
  // 文字列型として型定義
  job: string;
  // 文字列型として型定義
}
// TableListに渡すpropsのlistDataの値の型定義

export interface ColumnsData {
  title: string;
  // 文字列型として型定義
  dataIndex: string;
  // 文字列型として型定義
  key: string;
  // 文字列型として型定義
  sorter: (a: ListData, b: ListData) => number;
  // 引数a、bをListDataで定義した型、returnを数値型として持つ関数として型定義
}
// TableListに渡すpropsのcolumnsDataの値の型定義

const TableListContainer: React.FC = ():JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型の型定義として、returnをreact側で定義しているJSX.Element型として型定義を行う

  const columnsData: ColumnsData[] = [
    {
      title: "名前",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => {
        if(a.name < b.name){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.nameの文字列よりもb.nameの文字列の方が後ろの順番である場合に下記処理を実行
          return -1;
          // 返り値として0未満の数値を渡すことによりa.nameをb.nameよりも前の順番にソートする
        }
        if(a.name > b.name){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.nameの文字列よりもb.nameの文字列の方が前の順番である場合に下記処理を実行
          return 1;
          // 返り値として1以上の数値を渡すことによりa.nameをb.nameよりも後の順番にソートする
        }
        return 0;
        // 上記if文に当てはまらなかった場合はa.nameとb.nameが同一の値であるため順番のソートを行わない
      }
    },
    {
      title: "年齢",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age
      // 年齢は数値型のためa.ageからb.ageを引いて0未満であればa.ageをb.ageよりも前の順番にソートし、1以上であればa.ageをb.ageよりも後ろの順番にソートし、0であれば順番のソートを行わない
    },
    {
      title: "誕生日",
      dataIndex: "birthday",
      key: "birthday",
      sorter: (a, b) :number => {
        if(a.birthday < b.birthday){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.addressの文字列よりもb.addressの文字列の方が後ろの順番である場合に下記処理を実行
          return -1;
          // 返り値として0未満の数値を渡すことによりa.addressをb.addressよりも前の順番にソートする
        }
        if(a.birthday > b.birthday){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.addressの文字列よりもb.addressの文字列の方が前の順番である場合に下記処理を実行
          return 1;
          // 返り値として1以上の数値を渡すことによりa.addressをb.addressよりも後の順番にソートする
        }
        return 0;
        // 上記if文に当てはまらなかった場合はa.addressとb.addressが同一の値であるため順番のソートを行わない
      }
    },
    {
      title: "性別",
      dataIndex: "gender",
      key: "gender",
      sorter: (a, b) => {
        if(a.gender < b.gender){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.genderの文字列よりもb.genderの文字列の方が後ろの順番である場合に下記処理を実行
          return -1;
          // 返り値として0未満の数値を渡すことによりa.genderをb.genderよりも前の順番にソートする
        }
        if(a.gender > b.gender){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.genderの文字列よりもb.genderの文字列の方が前の順番である場合に下記処理を実行
          return 1;
          // 返り値として1以上の数値を渡すことによりa.genderをgenderよりも後の順番にソートする
        }
        return 0;
        // 上記if文に当てはまらなかった場合はa.genderとb.genderが同一の値であるため順番のソートを行わない
      }
    },
    {
      title: "職業",
      dataIndex: "job",
      key: "job",
      sorter: (a, b) => {
        if(a.job < b.job){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.jobの文字列よりもb.jobの文字列の方が後ろの順番である場合に下記処理を実行
          return -1;
          // 返り値として0未満の数値を渡すことによりa.jobをb.jobよりも前の順番にソートする
        }
        if(a.job > b.job){
          // 文字列の記号、数字、アルファベット、ひらがな、カタカナ、漢字の順番で比較した際にa.jobの文字列よりもb.jobの文字列の方が前の順番である場合に下記処理を実行
          return 1;
          // 返り値として1以上の数値を渡すことによりa.jobをb.jobよりも後の順番にソートする
        }
        return 0;
        // 上記if文に当てはまらなかった場合はa.jobとb.jobが同一の値であるため順番のソートを行わない
      }
    }
  ];
  // antdesignのTableコンポーネントで使用するcolumns属性に設定する配列の代入
  // title：Tableコンポーネントのヘッダー項目に表示する内容
  // dataIndex：各列の各枠に表示する内容
  // key：各列ごとに設定するキー
  // sorter：ソートの基準を決める比較関数を設定

  const history = useHistory();
  // hooksのuseHistoryを使用してブラウザヒストリーをhistoryに代入
  const rowClick = () => history.push(`${routePath.TABLE_LIST}${routePath.DETAIL}`, TableListData);
  // 特定のアクション時（今回はTableList内の一覧表の各行をクリック）に指定したURLへ遷移するように設定

  return(
    <TableList listData={TableListData} columnsData={columnsData} clickAction={rowClick}/>
    // TableListコンポーネントにpropsを渡して出力
  )
}

export default TableListContainer;
// 他のコンポーネントでも使用できるようにexport