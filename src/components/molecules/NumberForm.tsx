import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, InputNumber } from "antd";
// antdesignのForm、InputNumberコンポーネントの読み込み
import { GetFieldDecoratorOptions } from "antd/es/form/Form";
// 型定義に必要なtypeの読み込み

interface NumberFormProps {
  numberForm: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  defaultData: number;
  // propsとして受け取るdefaultDataを数値型として定義
  // propsの型定義
}

const NumberForm:React.FC<NumberFormProps> = (props):JSX.Element => {
  // 関数コンポーネントをReact.FCかつNumberFormPropsとして、returnをJSX.Elementとして型定義
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.numberForm;
  // 受け取ったpropsを分割代入
  const numberError:  false | string[] | undefined = isFieldTouched('number') && getFieldError('number');
  // 数値入力フィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（numberErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  return(
    <Form.Item validateStatus={numberError ? 'error' : ''} help={numberError || ''} key={"number"}>
      {/* フォームにkeyを設定し、numberErrorの値がtrueであればエラーメッセージを表示 */}
      {getFieldDecorator('number', {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please input more number!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
        ],
        initialValue: props.defaultData,
        // propsとして受け取ったdefaultDataをフォームの初期値として設定
      })(<InputNumber/>)}
      {/* antdesignの数値入力フォームを出力 */}
    </Form.Item>
  )
}

export default NumberForm;
// 他のコンポーネントでも使用できるようにexport