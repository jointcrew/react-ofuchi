import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, DatePicker } from "antd";
// antdesignのForm、DatePickerコンポーネントの読み込み
import { GetFieldDecoratorOptions } from "antd/es/form/Form";
// 型定義に必要なtypeの読み込み
import moment from "moment";
// 日付フォームの初期値入力に必要なAPIの読み込み

interface DateFormProps {
  dateForm: {
    getFieldDecorator: <T extends Object = {}>(id: keyof T, options?: GetFieldDecoratorOptions | undefined) => (node: React.ReactNode) => React.ReactNode;
    // 関数型として型定義（空のオブジェクト型を継承したTの名前の値を第一引数のidの型定義として設定し、第二引数optionsに値が入っている場合はantdesignの型定義GetFieldDecoratorOptions型もしくはundefined型として型定義、returnをさらに関数型として型定義して引数nodeとreturnにレンダリング用の型定義React.ReactNode型を設定）
    getFieldError: (name: string) => string[] | undefined;
    // 関数型として型定義（引数nameをstring型、returnをstring型の配列もしくはundefined型として型定義）
    isFieldTouched: (name: string) => boolean;
    // 関数型として型定義（引数nameをstring型、returnをboolean型として型定義）
  }
  defaultData: string;
  // propsとして受け取るdefaultDataを文字列型として型定義
  // propsの型定義
}

const DateForm:React.FC<DateFormProps> = (props):JSX.Element => {
  // 関数コンポーネントをReact.FCかつDateFormPropsとして、returnをJSX.Elementとして型定義
  const { getFieldDecorator, getFieldError, isFieldTouched } = props.dateForm;
  // 受け取ったpropsを分割代入
  const dateError:  false | string[] | undefined = isFieldTouched('date') && getFieldError('date');
  // 日付入力フィールドをクリック後エラーが発生した場合にstring型の配列で型定義したエラーメッセージを代入し、そうでない場合はundefined型のundefinedを代入（dateErrorの型定義はisFieldTouchedとgetFieldErrorの型定義を合わせたもの）
  const dateDefault = moment(new Date(props.defaultData))
  // dateDefaultにpropsとして受け取ったdefaultDataをDateオブジェクトに変換してさらにmomentオブジェクトに変換したものを代入
  return(
    <Form.Item validateStatus={dateError ? 'error' : ''} help={dateError || ''} key={"date"}>
      {/* フォームにkeyを設定し、dateErrorがtrueであればエラーメッセージを表示 */}
        {getFieldDecorator('date', {
        // getFieldDecoratorで括ることによって入力ルール、エラーメッセージをまとめて設定
        rules: [
          {
            required: true,
            message: 'Please input date!',
            // 必須入力の設定と未入力の際に出力するエラーメッセージの設定（一度入力開始後に内容を削除した際にエラー扱いとなる）
          },
        ],
        initialValue: dateDefault,
        // dateDefaultをフォームの初期値として設定
      })(<DatePicker defaultPickerValue={dateDefault} />)}
      {/* 日付のピッカーを起動した際の初期値をdateDefaultとして設定 */}
    </Form.Item>
  )
}

export default DateForm;
// 他のコンポーネントでも使用できるようにexport