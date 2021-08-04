import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import GlobalStyle from "./globalStyle";
import Login from "./components/Login";
import React from "react";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
