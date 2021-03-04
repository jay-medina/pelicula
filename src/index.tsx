import React from "react";
import ReactDOM from "react-dom";
import { MovieApp } from "./movieApp";
import { createStore } from "./data/store";

import "./index.css";

const appStore = createStore();

ReactDOM.render(<MovieApp store={appStore} />, document.getElementById("app"));
