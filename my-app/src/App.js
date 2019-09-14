import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
