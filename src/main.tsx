import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from '../AppClass';
import Fruits from '../Fruits';
import Hello from '../hello';
import FruitsClass from './FruitsClass';
//import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FruitsClass />
  </React.StrictMode>
);
