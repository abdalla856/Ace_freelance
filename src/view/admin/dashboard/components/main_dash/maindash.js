import React from "react";
import "./maindash.css";
import DougnutChar from "../../../../../shared/doughnutchart/doughnut";
import LineCart from "../../../../../shared/linechart/line";
import  {BarChar}  from "../../../../../shared/barchart/bar";
import { faker } from "@faker-js/faker";

const projects_data = {
  labels: ["In Progress", "Finished"],

  datasets: [
    {
      data: [45, 55],
      backgroundColor: ["green ", "red"],
      borderColor: ["greenn", "red"],
      borderWidth: 1,
    },
  ],
};
const labelsline = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const order_month_data = {
  labels: labelsline,
  datasets: [
    {
      label: "In progress",
      data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Finished",
      data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const order_chart_month_data = {
  labels: labelsline,
  datasets: [
    {
      label: "in chart",
      data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "orderd",
      data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const bardata = {
    labels,
    datasets: [
  
      {
        label: "income in RM",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
const MainDash = () => {
  return (
    <>
      <div className="main_dash">
        <h2>Mian Dashboard</h2>
        <div className="main_dash_charts">
          <DougnutChar data={projects_data} labels="In Progress Vs Finished" />
          <LineCart linedata={order_month_data} label="Orders per month" />
        </div>
        <div className="main_dash_charts">
        <BarChar data = {bardata} label ="Income per Month"/>
          <LineCart linedata={order_chart_month_data} label="order vs in chart per month" />
        </div>
      </div>
    </>
  );
};

export default MainDash;
