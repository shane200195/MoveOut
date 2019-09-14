import React, { Component } from "react";
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
      showPassword: false
    };
    this.handleChange = this.handleMouseDownPassword.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleChange = variable => event => {
    this.state.setValues({ [variable]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.state.setValues({ ...values, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Dashboard">
        <TextField
          id="outlined-adornment-password"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          type={values.showPassword ? "text" : "password"}
          label="Password"
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
