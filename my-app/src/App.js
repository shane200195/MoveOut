import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Redirect from "./components/redirect/Redirect";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Redirect} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
