import React from 'react';
import {Route} from "react-router-dom";
import {routePath} from '../constants/Route';
import Main from '../components/pages/Main';
import List from '../components/pages/List';
import Login from '../components/pages/Login';
import PasswordReset from '../components/pages/PasswordReset';

export const Router: React.FC = () => {
  return(
    <>
        <Route exact path={routePath.PAGE_TOP} component={Main} />
        <Route path={`${routePath.GALLERY}/:id`} component={List}/>
        <Route path={routePath.LOGIN} component={Login}/>
        <Route path={routePath.PASSWORD_RESET} component={PasswordReset}/>
    </>
  )

}