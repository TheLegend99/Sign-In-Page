import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Login from './login';
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
//import animationlogin from './animationlogin'

ReactDOM.render(
  <BrowserRouter>
    < Route path="/" component = {App}/>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();