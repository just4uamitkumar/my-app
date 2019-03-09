import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Login from './Login';
//import Home from './Home';
//import Document from './Document';
//import Stateless from './Stateless';
//import LifeCycle from './LifeCycle';
//import AjaxCall from './AjaxCall';
import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();