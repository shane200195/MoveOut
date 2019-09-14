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
              <div className="User_Details" class="row">
                <div class="col-12">
                  <AvatarStyles />
                </div>
              </div>
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

        <section class="page-section" id="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Services</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">E-Commerce</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Responsive Design</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Web Security</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ul class="timeline">
                  <li>
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src="img/about/1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 class="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src="img/about/2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 class="subheading">An Agency is Born</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src="img/about/3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 class="subheading">Transition to Full Service</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src="img/about/4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 class="subheading">Phase Two Expansion</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-light page-section" id="team">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    class="mx-auto rounded-circle"
                    src="img/team/1.jpg"
                    alt=""
                  />
                  <h4>Kay Garland</h4>
                  <p class="text-muted">Lead Designer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    class="mx-auto rounded-circle"
                    src="img/team/2.jpg"
                    alt=""
                  />
                  <h4>Larry Parker</h4>
                  <p class="text-muted">Lead Marketer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="team-member">
                  <img
                    class="mx-auto rounded-circle"
                    src="img/team/3.jpg"
                    alt=""
                  />
                  <h4>Diana Pertersen</h4>
                  <p class="text-muted">Lead Developer</p>
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <p class="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-4">
                <span class="copyright">
                  Copyright &copy; Your Website 2019
                </span>
              </div>
              <div class="col-md-4">
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-inline quicklinks">
                  <li class="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
