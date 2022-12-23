import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';
import { UserProvider } from './contexts/user.context';
import {ErrorProvider} from './contexts/error.context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ErrorProvider>
    <UserProvider> <App /></UserProvider>
    </ErrorProvider> 
   </BrowserRouter>
   
  </React.StrictMode>
);

reportWebVitals();
