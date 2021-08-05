import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import GlobalStyle from "./globalStyle";
import Registration from "./components/Registration";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Registration}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
