import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import GlobalStyle from "./globalStyle";
import Registration from "./components/Registration";
import Home from "./components/Home";


import React from "react";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
