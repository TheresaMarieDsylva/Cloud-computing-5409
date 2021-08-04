import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import GlobalStyle from "./globalStyle";
import Registration from "./components/Registration";
import Home from "./components/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
        <Route path="/">
            <Home />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
