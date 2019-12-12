import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// My imports 
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducer";

// create redux store
const store = createStore(reducer);

// wrap App in Provider and pass in store object
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootElement
);
