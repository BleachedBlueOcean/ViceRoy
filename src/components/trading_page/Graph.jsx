// components/LineChart.js
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import axios from "axios"
// import Data from "./../../data/graphData.js"

function LineChart({ coin, interval }) {
  const [chartData, setChartData] = useState(undefined)
  useEffect(() => {
    axios(`https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}`)
    .then((result) => {
      console.log(result.data.data)
      return result.data.data
    })
    .then((Data) => {
      console.log('This is what setChartData sees ', Data)
      setChartData({
        labels: Data.map((data) => data.date),
        datasets: [
          {
            label: `Value of ${coin}`,
            data: Data.map((data) => data.priceUsd),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "white",
            borderWidth: 2
          }
        ]
      })
    })
  }, [coin])

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}></h2>
      { chartData !== undefined && <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Value of ${coin}`
            },
            legend: {
              display: false
            }
          }
        }}
      />}
    </div>
  );
}
export default LineChart;