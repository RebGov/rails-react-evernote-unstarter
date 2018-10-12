import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {createStore, combineReducers} from 'redux';
// import {Provider} from 'react-redux';
// import Logger from 'redux-logger';
// import Thunk from 'redux-thunk';

//reducers action of state
//userReducer?
//loggedInReducer?
//noteReducer

// let store = createStore(combineReducers({reducersHere, reducersHere1}))
//javascript object holding reducers
//import reducerNamed.js to this page
ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
