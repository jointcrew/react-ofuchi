import React, { useEffect, useState } from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { useLocation } from "react-router-dom";
// hooksでロケーションを取得するためのコンポーネントの読み込み
import { Form } from "antd";
// antdesignのFormコンポーネント読み込み
import { FormComponentProps } from 'antd/es/form';
// antdesign用の型定義読み込み
import NumberForm from "components/molecules/NumberForm";
// 数値入力タイプのフォームコンポーネント読み込み
import DateForm from "components/molecules/DateForm";
// 日付入力タイプのフォームコンポーネント読み込み
import InputForm from "components/molecules/InputForm";
// テキストインプットタイプのフォームコンポーネント読み込み
import SelectForm from "components/molecules/SelectForm";
// セレクトボックスタイプのフォームコンポーネント読み込み
import DynamicInputForm from "components/organisms/DynamicInputForm";
// 動的にフォームの追加、削除が可能なインプットフォームコンポーネントの出力
import SubmitButton from "components/atoms/SubmitButton";
// ボタンコンポーネントの読み込み
import TableListData from "./TableListData.json";
// jsonデータの読み込み



const TableListDetail:React.FC<FormComponentProps> = (props): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型、returnをreact側で定義しているJSX.Element型で型定義
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldValue, setFieldsValue } = props.form;
  // 高階コンポーネントとして設定したpropsを分割代入

  useEffect((): void => {
    // return文がなくundefinedとなるためreturnをvoid型で型定義
    props.form.validateFields()
    // 各フォームのエラーと値を取得するvalidateFieldsを使用してフォームに何も入力されていない場合のレンダリング時にバリデーションを発生させてボタンを非活性化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //初回レンダリング時のボタン非活性化（warningをlintの無効化で対応）
  const location = useLocation();
  // hooksのuseLocationを使用してブラウザロケーションをlocationに代入
  console.log(location.state);

  const userData = TableListData.map(x => TableListData[x.key - 1].name);
  const booleanData = TableListData.map(x => TableListData[x.key - 1].smoker);
  console.log(userData, booleanData);

  const remove = (k: unknown): void => {
    // 動的にフォームを削除する関数removeを定義　引数kをunknown型、return文がなくundefinedとなるためreturnをvoid型で型定義
    const keys = getFieldValue('keys');
    // 文字列keysとして設定されたフォームフィールドの値を取得してkeysに代入
    if (keys.length === 0) {
      // もしkeysが１つも設定されていない場合は下記を実行
      return;
      // 追加の処理をせずそのままリターンを返す
    }
    setFieldsValue({
      // setFieldValueにフィールドネームと値を設定
      keys: keys.filter((key: unknown) => key !== k),
      // フィールドネームをkeys、値をkeysの値から引数keyと関数removeで設定した引数kが一致しない場合のみフィルター関数で抽出して設定
    });
  };

  const [id, setId] = useState(0);
  // 関数addで使用するidを設定

  const add = (): void => {
    // 動的にフォームを追加する関数addを定義　return文がなくundefinedとなるためreturnをvoidで型定義
    const keys = getFieldValue('keys');
    // 文字列keysとして設定されたフォームフィールドの値を取得してkeysに代入
    setId(id + 1);
    // クリックされるごとにidの数値を1づつ増やすように設定
    const nextKeys = keys.concat(id);
    // nextKeysにkeysとidを連結したものを代入
    setFieldsValue({
      // setFieldValueにフィールドネームと値を設定
      keys: nextKeys,
      // フィールドネームをkeys、値をnextKeysとして設定
    });
    console.log(keys)
  };

  const handleSubmit = (e: React.FormEvent): void => {
    // onSubmitで使用する引数eをReact.FormEvent型、return文がなくundefinedとなるためreturnをvoid型で型定義
    e.preventDefault();
    // 規定のボタン押下処理（画面遷移処理）をブロック
    props.form.validateFields((errors: boolean, values: object): void => {
      // 各フォームのエラーと値を取得するvalidateFieldsを使用して各フォームのboolean型に型定義したerrorsとobject型に型定義したvaluesを取得　return文がなくundefinedとなるためreturnをvoid型で型定義
      if (!errors) {
        console.log(values);
        // errorsがfalseであれば各フォームのvaluesをコンソールに出力
      }
    });
  };




  return(
    <Form onSubmit={handleSubmit}>
      {/* ボタン押下時の動作設定 */}
      <SelectForm selectForm={{getFieldDecorator, getFieldError, isFieldTouched}} selectData={"userData"} selectName={"username"}/>
      {/* propsとしてショートハンドオブジェクトのselectFormを子コンポーネントに渡す */}
      <NumberForm numberForm={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとしてショートハンドオブジェクトのnumberFormを子コンポーネントに渡す */}
      <DateForm dateForm={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとしてショートハンドオブジェクトのdateFormを子コンポーネントに渡す */}
      <SelectForm selectForm={{getFieldDecorator, getFieldError, isFieldTouched}} selectData={"booleanData"} selectName={"boolean"}/>
      {/* propsとしてショートハンドオブジェクトのselectFormを子コンポーネントに渡す */}
      <InputForm inputForm={{getFieldDecorator, getFieldError, isFieldTouched}} />
      {/* propsとしてショートハンドオブジェクトのinputFormを子コンポーネントに渡す */}
      <DynamicInputForm addAction={add} removeAction={remove} dynamicForm={getFieldDecorator} getFieldValue={getFieldValue}/>
      {/* propsとして関数add、関数remove、getFieldDecorator、高階コンポーネントで設定したgetFieldValueを子コンポーネントに渡す */}
      <SubmitButton error={getFieldsError} buttonLabel={"submit"}/>
      {/* propsとしてerrorとbuttonLabelを子コンポーネントへ渡す */}
    </Form>
  )
}

const TableListDetailContainer = Form.create({ name: 'TableListDetail' })(TableListDetail);
// 高階コンポーネントとしてTableListDetailコンポーネントにpropsを設定してTableListDetailContainerに代入

export default TableListDetailContainer;
// 他のコンポーネントでも使用できるようにexport