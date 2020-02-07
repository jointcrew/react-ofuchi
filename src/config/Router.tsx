import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {routePath} from '../constants/Route';
import Main from '../components/pages/Main';
import List from '../components/pages/List';


export const Router: React.FC = () => {
  return(
    <BrowserRouter>
        <Route exact path={routePath.PAGE_TOP} component={Main} />
        <Route path={`${routePath.GALLERY}/:id`} component={List}/>
    </BrowserRouter>
  )
}