import React from "react";
// reactのコードを機能させるために必要なコンポーネントの読み込み
import { Form, Input, Icon } from "antd";
// antdesignのForm、Input、Iconコンポーネントの読み込み

interface DynamicFormProps {
  getFieldValue: any;
  // 暫定としてany型で型定義
  dynamicForm: any;
  // 暫定としてany型で型定義
  removeAction: (k: unknown) => void;
  // propsとして受け取った関数の型定義
  // 関数型として引数kをunknown型、return文がないためreturnをundefined型で型定義
  addAction: () => void;
  // propsとして受け取った関数の型定義
  // 関数型としてreturn文がないためreturnをundefinedがたとして型定義
  // propsの型定義
}


const DynamicInputForm = (props:DynamicFormProps):JSX.Element => {
  const getFieldDecorator = props.dynamicForm;
  // propsとして受け取ったdynamicFormをgetFieldDecoratorに代入
  const getFieldValue = props.getFieldValue;
  // propsとして受け取ったgetFieldValueを同名のgetFieldValueに代入
  getFieldDecorator('keys', { initialValue: [] });
  // フォーム名称と初期値の設定
  const keys = getFieldValue('keys');
  // keysに文字列keysとして設定したフォームフィールドの値を代入
  const formItems = keys.map((k: unknown, index: number) => (
    // formItemにkeysの値でmap関数を使用して生成した配列を代入
    <Form.Item label={"comment"} key={index + 1} >
      {/* labelとkeyを設定
      keyは初期表示のインプットフォームが別であるためmap関数で生成する配列のインデックス番号に+1して設定 */}
      {getFieldDecorator(`comments[${index + 1}]`)(<Input placeholder="comment"/>)}
      {/* フォームのユニークな名称とplaceholderを設定 */}
      <Icon type="plus-circle-o"  onClick={props.addAction}/>
      {/* フォームを追加するアイコンを出力 */}
      {keys.length >= 1 ? (
        <Icon type="minus-circle-o" onClick={() => props.removeAction(k)} />
      ) : null}
      {/* 三項演算子としてkeys.lengthが1以上の際にフォーム削除用のアイコンを表示させ、それ以外の場合にはnullを返す */}
    </Form.Item>
  ));
  return(
    <>
    <Form.Item label={"comment"} key={0} >
      {/* 初期表示のインプットフォームのlabelとkeyの設定 */}
      {getFieldDecorator("comments[0]")(<Input placeholder="comment"/>)}
      {/* フォームのユニークな名称とplaceholderを設定 */}
    <Icon type="plus-circle-o"  onClick={props.addAction}/>
    {/* フォームを追加するアイコンを出力 */}
    </Form.Item>
    {formItems}
    {/* formItemsの内容を出力 */}
    </>
  )

}

export default DynamicInputForm;
// 他のコンポーネントでも使用できるようにexport