import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./containers/app"
import { Provider } from 'react-redux';
import registerServiceWorker from "./registerServiceWorker";
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router><App /></Router>
  </Provider>
  , document.getElementById("root"));
registerServiceWorker();
