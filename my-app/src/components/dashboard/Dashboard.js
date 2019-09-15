import React, { Component } from "react";
import "../../css/Agency.css";
import { makeStyles } from "@material-ui/core/styles";
import { Progress } from "antd";

import Select from "@material-ui/core/Select";
import Visuals from "./graph";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
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

function createData(category, now, future) {
  return { category, now, future };
}

const ipAddress = "10.34.35.227";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      age: "",
      livingin: "",
      location: "Toronto",
      percentage: 0,
      totalIncome: 0,
      idealTotalIncome: 0,
      foodAndDining: 0,
      idealFoodAndDining: 0,
      entertainment: 0,
      idealEntertainment: 0,
      shopping: 0,
      idealShopping: 0,
      billAndUtilities: 0,
      idealBillAndUtilities: 0,
      autoAndTransport: 0,
      idealAutoAndTransport: 0,
      spending: 0,
      idealSpending: 0,
      classes: makeStyles(),
      rows: []
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

    var url = "http://" + ipAddress + ":5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ID: this.props.customerID,
        location: event.target.value
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          livingin: data.livingin,
          firstname: data.firstname,
          age: data.age,
          percentage: data.percentage,
          totalIncome: data.TotalIncome,
          idealTotalIncome: data.idealTotalIncome,
          foodAndDining: data.FoodAndDining,
          idealFoodAndDining: data.idealFoodAndDining,
          entertainment: data.Entertainment,
          idealEntertainment: data.idealEntertainment,
          shopping: data.Shopping,
          idealShopping: data.idealShopping,
          billAndUtilities: data.BillAndUtilities,
          idealBillAndUtilities: data.idealBillAndUtilities,
          autoAndTransport: data.AutoAndTransport,
          idealAutoAndTransport: data.idealAutoAndTransport,
          spending: data.Spending,
          idealSpending: data.idealSpending
        });
      });
    // alert(this.state.foodAndDining);
    this.setState({
      rows: [
        createData(
          "Food And Dining",
          this.state.foodAndDining,
          this.state.idealFoodAndDining
        ),
        createData(
          "Entertainment",
          this.state.entertainment,
          this.state.idealEntertainment
        ),
        createData("Shopping", this.state.shopping, this.state.idealShopping),
        createData(
          "Bills and Utilities",
          this.state.billAndUtilities,
          this.state.idealBillAndUtilities
        ),
        createData(
          "Auto And Transport",
          this.state.autoAndTransport,
          this.state.idealAutoAndTransport
        ),
        createData(
          "Total Spending",
          this.state.spending,
          this.state.idealSpending
        ),
        createData(
          "Total Income",
          this.state.totalIncome,
          this.state.totalIncome
        )
      ]
    });
    console.log(this.state.User);
  };

  componentDidMount() {
    var url = "http://" + ipAddress + ":5000/response";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ID: this.props.customerID,
        location: "Toronto"
      })
    })
      .then(response => response.json())
      .then(data => {
        // alert(data.name + " " + data.FoodAndDining);
        this.setState({
          name: data.name,
          livingin: data.livingin,
          firstname: data.firstname,
          age: data.age,
          percentage: data.percentage,
          totalIncome: data.TotalIncome,
          idealTotalIncome: data.idealTotalIncome,
          foodAndDining: data.FoodAndDining,
          idealFoodAndDining: data.idealFoodAndDining,
          entertainment: data.Entertainment,
          idealEntertainment: data.idealEntertainment,
          shopping: data.Shopping,
          idealShopping: data.idealShopping,
          billAndUtilities: data.BillAndUtilities,
          idealBillAndUtilities: data.idealBillAndUtilities,
          autoAndTransport: data.AutoAndTransport,
          idealAutoAndTransport: data.idealAutoAndTransport,
          spending: data.Spending,
          idealSpending: data.idealSpending
        });
      });
    // alert(this.state.foodAndDining);
    this.setState({
      rows: [
        createData(
          "Food And Dining",
          this.state.foodAndDining,
          this.state.idealFoodAndDining
        ),
        createData(
          "Entertainment",
          this.state.entertainment,
          this.state.idealEntertainment
        ),
        createData("Shopping", this.state.shopping, this.state.idealShopping),
        createData(
          "Bills and Utilities",
          this.state.billAndUtilities,
          this.state.idealBillAndUtilities
        ),
        createData(
          "Auto And Transport",
          this.state.autoAndTransport,
          this.state.idealAutoAndTransport
        ),
        createData(
          "Total Spending",
          this.state.spending,
          this.state.idealSpending
        ),
        createData(
          "Total Income",
          this.state.totalIncome,
          this.state.totalIncome
        )
      ]
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
                    <a class="nav-link js-scroll-trigger" href="#graphs">
                      Price By Location
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#charts">
                      My Spending
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
                      percent={this.state.percentage}
                      width={240}
                      strokeWidth={10}
                      strokeColor={{
                        "50%": "#cbffad",
                        "50%": "#008A00"
                      }}
                    />
                  </div>
                  <div class="hi-name col-5 offset-1">
                    <div class="intro-heading">Hi {this.state.firstname}!</div>
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
                    {this.state.percentage >= 100 ? (
                      <div class="move-out-status">Ready To Move Out!</div>
                    ) : (
                      <div class="move-out-status">Not Quite There</div>
                    )}
                  </div>
                </div>
                <div class="row justify-content-center">
                  <a
                    class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                    href="#graphs"
                  >
                    Tell Me More
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="page-section" id="graphs">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">
                  Price By Location
                </h2>
                <h3 class="section-subheading text-muted">
                  Spending comparison between all potential cities
                </h3>
              </div>
            </div>

            <Visuals />
          </div>
        </div>

        <div class="page-charts" id="charts">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">My Spending</h2>
                <h3 class="section-subheading text-muted">
                  Compares spending in {this.state.livingin} (your home) and{" "}
                  {this.state.location} (where you would like to live)
                </h3>
              </div>
            </div>
            <Paper className={this.state.classes.root}>
              <Table className={this.state.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">
                      Current Spending ({this.state.livingin})
                    </TableCell>
                    <TableCell align="right">
                      Predicted Spending ({this.state.location})&nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map(row => (
                    <TableRow key={row.category}>
                      <TableCell component="th" scope="row">
                        {row.category}
                      </TableCell>
                      <TableCell align="right">{row.now}</TableCell>
                      <TableCell align="right">{row.future}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>

        <footer class="footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-4">
                <span class="copyright">
                  Copyright &copy; Your Website 2019
                </span>
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
