import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
