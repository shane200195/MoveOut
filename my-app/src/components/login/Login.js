import React, { Component } from "react";
import "../../css/Agency.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

const AvatarStyles = () => {
  const classes = useStyles();
  return (
    <div>
      <Avatar alt="UserAvatar" src={tempAvatar} className={classes.avatar} />
    </div>
  );
};

const [values, setValues] = React.useState({
  amount: "",
  password: "",
  weight: "",
  weightRange: "",
  showPassword: false
});

class Dashboard extends Component {
  render() {
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
      event.preventDefault();
    };
    return (
      <div className="Dashboard">
        <IconButton
          edge="end"
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </div>
    );
  }
}

export default Dashboard;
