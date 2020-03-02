import React from 'react';
// reactを機能させるために必要なコンポーネントの読み込み
import {Link} from 'react-router-dom';
// ルーティング用コンポーネントの読み込み
import {routePath} from '../../constants/Route';
// 各コンポーネントへのルーティング用URLパスの読み込み


const Header: React.FC = (): JSX.Element => {
  // 関数コンポーネントをreact側で定義しているReact.FC型、returnをreact側で定義しているJSX.Element型で型定義
  return (
    <header className="App-header">
      <div>
        <ul>
          <li><Link to={routePath.PAGE_TOP}>top</Link></li>
          {/* toで指定したURLパスへのルーティング動作 */}
          <li><Link to={{
            pathname:`${routePath.GALLERY}/1`,
            state: { listNum: 0 }
          }}>location1</Link></li>
          {/* toで指定したURLパスへのルーティング動作とURLパスと紐付いて出力されるコンポーネントへpropsとしてstateの受け渡し */}
          <li><Link to={{
            pathname:`${routePath.GALLERY}/2`,
            state: {listNum: 1 }
          }}>location2</Link></li>
          {/* toで指定したURLパスへのルーティング動作とURLパスと紐付いて出力されるコンポーネントへpropsとしてstateの受け渡し */}
          <li><Link to={{
            pathname:`${routePath.GALLERY}/3`,
            state: {listNum: 2 }
          }}>location3</Link></li>
          {/* toで指定したURLパスへのルーティング動作とURLパスと紐付いて出力されるコンポーネントへpropsとしてstateの受け渡し */}
          <li><Link to={{
            pathname:`${routePath.GALLERY}/4`,
            state: {listNum: 3 }
          }}>location4</Link></li>
          {/* toで指定したURLパスへのルーティング動作とURLパスと紐付いて出力されるコンポーネントへpropsとしてstateの受け渡し */}
        </ul>
      </div>
    </header>

  )
}

export default Header;