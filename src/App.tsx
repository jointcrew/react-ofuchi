import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/pages/Main';
import List from './components/pages/List';


const App: React.FC = () => {
  return (
    <Router>
      <Main />
      <List />
    </Router>
  );
}

export default App;
