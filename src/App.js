import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import GlobalStyle from "./globalStyle";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
