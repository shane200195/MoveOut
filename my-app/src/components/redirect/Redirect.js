import React, { Component } from "react";
import axios from "axios";
import "../../css/Agency.css";
import "../../css/util.css";
import "../../css/main.css";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";

class Redirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      customerID: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = variable => event => {
    this.setState({ [variable]: event.target.value });
    console.log(this.state[variable]);
  };

  handleLogin(value) {
    this.setState({
      customerID: value,
      loggedIn: true
    });
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <div className="Redirect">
          <Login
            loggedIn={this.state.loggedIn}
            customerID={this.state.customerID}
            handleLogin={this.handleLogin}
          />
        </div>
      );
    } else {
      return (
        <div className="Redirect">
          <Dashboard customerID={this.state.customerID} />
        </div>
      );
    }
  }
}

export default Redirect;
