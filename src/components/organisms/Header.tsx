import React from 'react';
import {Link} from 'react-router-dom';
import {routePath} from '../../constants/Route';


const Header: React.FC = () => {
  return (
    <header className="App-header">
    <div>
        <ul>
          <li><Link to='/'>top</Link></li>
          <li><Link to={routePath.PAGE_ONE}>location1</Link></li>
          <li><Link to={routePath.PAGE_TWO}>location2</Link></li>
          <li><Link to={routePath.PAGE_THREE}>location3</Link></li>
          <li><Link to={routePath.PAGE_FOUR}>location4</Link></li>
        </ul>
      </div>
      </header>

  )
}

export default Header;