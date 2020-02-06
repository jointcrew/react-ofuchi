import React from 'react';
import Header from '../organisms/Header';
import {Routing} from '../../config/Router';

const List: React.FC = () => {
  return(
    <div>
      <Header />
      <Routing />
    </div>
  )
}

export default List;