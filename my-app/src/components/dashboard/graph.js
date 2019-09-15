import React, { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip
} from "recharts";

export default class Visuals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        name: "Food & Dining",
        [this.props.livingin]: this.props.foodAndDining,
        [this.props.location]: this.props.idealFoodAndDining,
        amt: 2400
      },
      {
        name: "Entertainment",
        [this.props.livingin]: this.props.entertainment,
        [this.props.location]: this.props.idealEntertainment,
        amt: 2210
      },
      {
        name: "Shopping",
        [this.props.livingin]: this.props.shopping,
        [this.props.location]: this.props.idealShopping,
        amt: 2290
      },
      {
        name: "Bill & Utilities",
        [this.props.livingin]: this.props.billAndUtilities,
        [this.props.location]: this.props.idealBillAndUtilities,
        amt: 2000
      },
      {
        name: "Auto & Transport",
        [this.props.livingin]: this.props.autoAndTransport,
        [this.props.location]: this.props.idealAutoAndTransport,
        amt: 2181
      }
    ];

    return (
      <div>
        <BarChart width={800} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey={this.props.livingin} fill="#8884d8" />
          <Bar dataKey={this.props.location} fill="#82ca9d" />
        </BarChart>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
