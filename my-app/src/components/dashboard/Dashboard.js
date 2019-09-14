import React, { Component } from "react";
import "../../css/Agency.css";
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
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header class="masthead">
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
        </header>
        <div className="User_Details" class="row">
          <div class="col-12">
            <AvatarStyles />
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
