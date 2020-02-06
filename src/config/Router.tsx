import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routePath} from '../constants/Route';
import Main from '../components/pages/Main';
import List from '../components/pages/List';



export const Routing: React.FC = () => {
  return(
    <Router>
      <Switch>
        <Route path={routePath.PAGE_ONE}>
          <List url={0} />
        </Route>
        <Route path={routePath.PAGE_TWO}>
          <List url={1} />
        </Route>
        <Route path={routePath.PAGE_THREE}>
          <List url={2} />
        </Route>
        <Route path={routePath.PAGE_FOUR}>
          <List url={3} />
        </Route>
        <Route path={routePath.PAGE_TOP}>
          <Main />
        </Route>
      </Switch>
  </Router>
  )
}