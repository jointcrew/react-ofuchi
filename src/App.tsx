import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import {Router} from './config/Router';
import Header from './components/organisms/Header';




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
