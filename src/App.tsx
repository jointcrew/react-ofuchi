import React from 'react';
import './App.css';
//import Header from './components/organisms/header';
//import Content from './content';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/pages/main';
import List from './components/pages/list';


const App: React.FC = () => {
  return (
    <Router>
      <Main />
      <List />
    </Router>
  );
}

export default App;
