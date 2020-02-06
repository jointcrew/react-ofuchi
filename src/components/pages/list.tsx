import React from 'react';
import Header from '../organisms/header';
import {Routing} from '../../config/router';

const List: React.FC = () => {
  return(
    <div>
      <Header />
      <Routing />
    </div>
  )
}

export default List;