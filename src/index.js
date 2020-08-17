import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { createStore, combineReducers } from 'redux'
import { Provider } from './react-redux'

import App from "./App";
import theme from "./theme";

import persistReducer from './utils/persistReducer';
import PersistGate from './utils/PersistGate';

const createKay = (key, init = null) => (state = init, action) => {
  switch (action.type) {
    case key:
      return action.value;
    default:
      return state;
  };
}

const username = createKay("username");
const password = createKay("password");
const cookie = createKay("cookie");
const contentid = createKay("contentid");
const pagesid = createKay("pagesid", 0);
const drawer = createKay("drawer", false);
const open1 = createKay("open1", false);
const open2 = createKay("open2", false);
const mails = createKay("mails");
const label = createKay("label");
const content = createKay("content");

const persistedReducer = persistReducer(combineReducers({ username, password, cookie, contentid, pagesid, drawer, open1, open2, mails, label, content }))
const store = createStore(persistedReducer)

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.querySelector("#root")
);