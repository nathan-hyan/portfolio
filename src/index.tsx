import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/main.scss";
import WOW from "wowjs";
new WOW.WOW({ mobile: false }).init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
