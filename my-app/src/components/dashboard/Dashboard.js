import React, { Component } from "react";
import "../../css/Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import tempAvatar from "./static/images/avatar/1.jpg";

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

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="User_Details" class="row">
          <div class="col-3">
            <AvatarStyles />
          </div>
          <div class="col-9">
            <p>testing</p>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="intro-text">
              <div class="intro-lead-in">Welcome To Our Studio!</div>
              <div class="intro-heading text-uppercase">
                It's Nice To Meet You
              </div>
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#services"
              >
                Tell Me More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
