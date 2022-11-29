import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import './line.css'

  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
ChartJS.defaults.color = "white";


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



const LineCart =({linedata , label =""})=>{
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
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
    <div className="linechart">

      <Line options={options} data={linedata} />
    </div>
    )
}


export default LineCart;