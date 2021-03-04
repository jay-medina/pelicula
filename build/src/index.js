import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import {MovieApp} from "./movieApp.js";
import {createStore} from "./data/store.js";
import "./index.css.proxy.js";
const appStore = createStore();
ReactDOM.render(/* @__PURE__ */ React.createElement(MovieApp, {
  store: appStore
}), document.getElementById("app"));
