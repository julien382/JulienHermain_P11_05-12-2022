import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom"
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/JulienHermain_P11_05-12-2022">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
