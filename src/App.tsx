import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import {Router} from './config/Router';




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
