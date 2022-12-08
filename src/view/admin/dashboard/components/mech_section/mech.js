import React from "react";
import './mech.css'
import DougnutChar from "../../../../../shared/doughnutchart/doughnut";
import LineCart from "../../../../../shared/linechart/line";

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
      label: "Income per Month",
      data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Finished",
    //   data: labelsline.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};



const MechSection =()=>{
return (
    <>
    <div className="main_dash_graphic">
      <h2>Mian Mechanical Dashboard</h2>
      <div className="main_dash_charts">
        <DougnutChar data={projects_data} labels="In Progress Vs Finished" />
        <LineCart linedata={order_month_data} label="Income per Month" />
      </div>

    </div>
  </> 
)
}

export default MechSection;