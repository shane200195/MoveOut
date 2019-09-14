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
  }

  componentDidMount() {
    var url = "http://10.34.35.227:5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        hello: "test"
      })
    }).then(response => response.json());
  }

  handleChange = variable => event => {
    this.state.setValues({ [variable]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.state.setValues({ showPassword: !this.state.showPassword });
  };

  render() {
    return (
      <div className="Login">
        <TextField
          id="outlined-adornment-password"
          className={clsx(
            this.state.classes.margin,
            this.state.classes.textField
          )}
          variant="outlined"
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
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  }
}

export default Dashboard;
