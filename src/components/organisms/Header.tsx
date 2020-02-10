import React from 'react';
import {Link} from 'react-router-dom';
import {routePath} from '../../constants/Route';


const Header: React.FC = () => {
  return (
    <header className="App-header">
    <div>
        <ul>
          <li><Link to={routePath.PAGE_TOP}>top</Link></li>
          <li><Link to={{
            pathname:`${routePath.GALLERY}/1`,
            state: { listNum: 0 }
          }}>location1</Link></li>
          <li><Link to={{
            pathname:`${routePath.GALLERY}/2`,
            state: {listNum: 1 }
          }}>location2</Link></li>
          <li><Link to={{
            pathname:`${routePath.GALLERY}/3`,
            state: {listNum: 2 }
          }}>location3</Link></li>
          <li><Link to={{
            pathname:`${routePath.GALLERY}/4`,
            state: {listNum: 3 }
          }}>location4</Link></li>
        </ul>
      </div>
      </header>

  )
}

export default Header;