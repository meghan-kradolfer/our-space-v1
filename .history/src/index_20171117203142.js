import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./containers/app"
import registerServiceWorker from "./registerServiceWorker";
import {promise, applyMiddleware} from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
registerServiceWorker();
