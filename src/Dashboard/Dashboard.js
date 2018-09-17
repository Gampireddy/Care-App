import React, { Component } from "react";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import { Card, CardBody, CardColumns, CardHeader } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import Main from "../MainNav/MainNav.js";
import Header from "../Header/Header.js";

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};
class Charts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header />

          <Main />

          {/* <div className="animated fadeIn">
          <CardColumns className="cols-2">
            <Card sm={{ size: 'auto', offset: 1 }}>
              <CardHeader>
                Line Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line} options={options} />
                </div>
              </CardBody>
            </Card>
          </CardColumns>
        </div> */}
        </div>
      </div>
    );
  }
}
export default Charts;
