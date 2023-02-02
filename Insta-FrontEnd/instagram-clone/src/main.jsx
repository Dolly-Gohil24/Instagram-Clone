import React from "react";
import ReactDOM from "react-dom/client";
import UserState from "../Context/UserState";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <UserState> */}
      <App />
    </Router>
    {/* </UserState> */}
  </React.StrictMode>
);
