import React, { Component } from "react";
import "../../css/Agency.css";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import { Progress } from "antd";

import LinearProgress from "@material-ui/core/LinearProgress";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  select: {
    "&:before": {
      borderColor: "white"
    },
    "&:after": {
      borderColor: "white"
    }
  },
  icon: {
    fill: "white"
  }
}));

const suggestions = [
  { label: "East York" },
  { label: "Etobicoke" },
  { label: "North York" },
  { label: "Scarborough" },
  { label: "Toronto" },
  { label: "York" }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      age: "",
      livingin: "",
      location: "Toronto",
      classes: makeStyles()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange = variable => event => {
    this.setState({ [variable]: event.target.value });
    console.log(this.state[variable]);
  };

  handleSelect = variable => event => {
    this.setState({ [variable]: event.target.value });
    console.log(this.state[variable]);

    var url = "http://10.34.35.227:5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ID: this.props.customerID
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          livingin: data.livingin,
          firstname: data.firstname,
          age: data.age
        });
      });

    console.log(this.state.User);
  };

  componentDidMount() {
    var url = "http://10.34.35.227:5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ID: this.props.customerID
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          livingin: data.livingin,
          firstname: data.firstname,
          age: data.age
        });
      });

    console.log(this.state.User);
  }

  render() {
    return (
      <div>
        <div className="Dashboard_Head" id="page-top">
          <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                Move Out
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
                <div class="user-text row">
                  <div class="progress-circle col-3 offset-2">
                    <Progress
                      type="circle"
                      percent={75}
                      width={240}
                      strokeWidth={10}
                      strokeColor={{
                        "50%": "#cbffad",
                        "50%": "#008A00"
                      }}
                    />
                  </div>
                  <div class="hi-name col-5 offset-1">
                    <div class="intro-heading">
                      Hi George {this.state.firstname}!
                    </div>
                    <span class="service-heading-user h2 text-uppercase">
                      Age: {this.state.age} <br />
                    </span>
                    <span class="service-heading-user h2 text-uppercase">
                      Living in: {this.state.livingin} <br />
                    </span>
                    <span class="service-heading-user h2 text-uppercase">
                      Moving to:
                    </span>
                    <span> &nbsp; &nbsp;</span>

                    <span>
                      <Select
                        pl={500}
                        autowidth
                        native
                        value={this.state.location}
                        onChange={this.handleSelect("location")}
                        inputProps={{
                          name: "location",
                          classes: {
                            root: this.state.classes.border,
                            icon: this.state.classes.icon
                          }
                        }}
                      >
                        <option value="" />
                        <option value={"East York"}>East York</option>
                        <option value={"Etobicoke"}>Etobicoke</option>
                        <option value={"North York"}>North York</option>
                        <option value={"Scarborough"}>Scarborough</option>
                        <option value={"Toronto"}>Toronto</option>
                        <option value={"York"}>York</option>
                      </Select>
                    </span>
                    <div class="we-analyze text-muted">
                      We've analyzed your data by comparing it to the spending
                      habits of individuals living in {this.state.location} and
                      have determined that you are...
                    </div>
                    <div class="move-out-status">Ready To Move Out!</div>
                  </div>
                </div>
                {/* <div className="User_Details" class="row">
                  <div class="col-12">
                    <BorderLinearProgress
                      className={this.state.classes.margin}
                      variant="determinate"
                      color="secondary"
                      value={50}
                    />
                  </div>
                  <br />
                  <br />
                </div> */}
                <div class="row justify-content-center">
                  <a
                    class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                    href="#about"
                  >
                    Tell Me More
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="about-section">
          <div class="page-section" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">About</h2>
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
          </div>
        </div>

        <footer class="footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-4">
                <span class="copyright">Copyright &copy; Move Out</span>
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
