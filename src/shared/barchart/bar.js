import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import "./bar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.color = "white";



export function BarChar({data , label = ""} ) {


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: label,
        font: {
          size: 20,
        },
      },
    },
  };
  
  return (
    <div className="bar_chart">
      <Bar options={options} data={data} />
    </div>
  );
}
