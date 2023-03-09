import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GoogleOAuthProvider clientId='176407481103-fcpahi0vgfn7te9612vr80jg2ihvsti1.apps.googleusercontent.com'>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
