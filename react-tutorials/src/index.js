import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import Apphooks from "./Containers/AppUsingHooks";
import * as serviceWorker from "./serviceWorker";
import AppDynamic from "./Containers/AppDynamic";
ReactDOM.render(
  <React.StrictMode>
    <AppDynamic />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
