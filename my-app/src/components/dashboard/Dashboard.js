import React, { Component } from "react";
import "../../css/Agency.css";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { Progress } from "antd";


import LinearProgress from "@material-ui/core/LinearProgress";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Visuals from "./graph";


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
          <nav
            class="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav"
          >
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
                  <div class="col-3 offset-2">
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
                  <div class="hi-name col-6 offset-1">
                    <div class="intro-heading">Hi {this.state.firstname}!</div>
                    <div class="user-details">
                      Age: {this.state.age} / Move to:
                      <Select
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
                        style={{}}
                      >
                        <option value="" />
                        <option value={"East York"}>East York</option>
                        <option value={"Etobicoke"}>Etobicoke</option>
                        <option value={"North York"}>North York</option>
                        <option value={"Scarborough"}>Scarborough</option>
                        <option value={"Toronto"}>Toronto</option>
                        <option value={"York"}>York</option>
                      </Select>
                    </div>
                    <div class="text-muted-explanation">
                      We've analyzed your data and have determined that you
                      are...
                    </div>

                    <div class="text-muted">Ready To Move Out!</div>
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

        <div class="page-section" id="about">
          <div class="container">
            <Visuals> </Visuals>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
