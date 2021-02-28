import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/Header";

import "./index.css";

function App() {
    return (
        <div className="app">
            <Header />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
