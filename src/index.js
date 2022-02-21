import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { PhotosContextProvider } from './PhotosContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PhotosContextProvider>
      <Router>
        <App />
      </Router>
    </PhotosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
