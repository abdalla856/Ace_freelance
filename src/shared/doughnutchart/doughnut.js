import React from "react";
import "./doughnut.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "white";

const DougnutChar = ({ data, labels = "no" }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: labels,
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="doughnut">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DougnutChar;
