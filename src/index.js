import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #feeffe;
  }
  html{
    font-size: 16px;
  }
`

ReactDOM.render(
  <div>
    <App/>
    <GlobalStyles/>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
