import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Select } from "antd";
// antdesignのForm、Selectコンポーネントの読み込み
import { GetFieldDecoratorOptions } from "antd/es/form/Form";
// 型定義に必要なtypeの読み込み

interface SelectFormProps {
  selectForm: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  selectData: any;
  selectName: string;
  selectBoolean?: boolean;
  defaultData: any;
  // propsの型定義
}

const SelectForm:React.FC<SelectFormProps> = (props):JSX.Element => {
  const { Option } = Select;
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.selectForm;
  // 受け取ったpropsを分割代入
  const selectError:  false | string[] | undefined = isFieldTouched(`${props.selectName}select`) && getFieldError(`${props.selectName}select`);
  // メールインプットフィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（emailErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  const optionData = props.selectData.map((x, index:number) => (
    <Option key={x}>{props.selectData[index]}</Option>
  ))
  const optionDataBoolean =[<Option key={0}>true</Option>, <Option key={1}>false</Option>]
  const defaultData = props.defaultData;
  console.log(defaultData);

  return(
    <Form.Item validateStatus={selectError ? 'error' : ''} help={selectError || ''} key={`${props.selectName}select`}>
        {getFieldDecorator(`${props.selectName}select`, {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please select!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
        ],
        initialValue: [props.defaultData.toString()],
        })(<Select>{props.selectBoolean === true ? optionDataBoolean : optionData}</Select>)}
    </Form.Item>
  )
}

export default SelectForm;
// 他のコンポーネントでも使用できるようにexport