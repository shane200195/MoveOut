import React, { Component } from "react";
import axios from "axios";
import "../../css/Agency.css";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      showPassword: false,
      classes: makeStyles()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange = variable => event => {
    this.state.setValues({ [variable]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.state.setValues({ showPassword: !this.state.showPassword });
  };

  handleSubmit() {
    console.log("submitting something");
    var url = "http://10.34.35.227:5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        hello: "test"
      })
    }).then(response => response.json());
  }

  render() {
    return (
      <div className="Login">
        <div>
          <header class="masthead">
            <div class="container">
              <div class="intro-text">
                <div className="Password_Field" class="row ">
                  <TextField
                    id="password"
                    className={clsx(
                      this.state.classes.margin,
                      this.state.classes.textField
                    )}
                    variant="filled"
                    type={this.state.showPassword ? "text" : "password"}
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div className="Submit_Button" class="row">
                  <a
                    class="btn btn-primary btn-m text-uppercase js-scroll-trigger"
                    onClick={this.handleSubmit}
                  >
                    Tell Me More
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Dashboard;
