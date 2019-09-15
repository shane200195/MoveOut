import React, { Component } from "react";
import axios from "axios";
import "../../css/Agency.css";
import "../../css/util.css";
import "../../css/main.css";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerID: "",
      password: "",
      showPassword: false,
      classes: makeStyles()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = variable => event => {
    this.setState({ [variable]: event.target.value });
    console.log(this.state[variable]);
  };

  handleSubmit() {
    this.props.handleLogin(this.state.customerID);
  }

  render() {
    return (
      <div className="Login" class="row">
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100 p-t-50 p-b-90">
              <form class="login100-form validate-form flex-sb flex-w">
                <span class="login100-form-title p-b-51">Move Out</span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Customer ID is required"
                >
                  <input
                    class="input100"
                    type="text"
                    name="customerID"
                    placeholder="Customer ID"
                    onChange={this.handleChange("customerID")}
                  />
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    onChange={this.handleChange("password")}
                  />
                  <span class="focus-input100"></span>
                </div>

                <div class="container-login100-form-btn m-t-17">
                  <button class="login100-form-btn" onClick={this.handleSubmit}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
