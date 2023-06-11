import React, { useState, useEffect } from "react";
import axios from "axios"
import { Chart } from 'react-google-charts'


function LineChart({ coin, interval }) {
  const [chartData, setChartData] = useState(undefined)
  useEffect(() => {
    axios(`https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}`)
    .then((result) => {
      console.log(result.data.data)
      return result.data.data
    })
    .then((result) => {
      console.log('This is what setChartData sees ', result)
      let data = result.map((point) => {
        return [point.date, Number(point.priceUsd)]
      })
      data.unshift(["date", `${coin.toUpperCase()}`])
      console.log('This is the data going to the chart', data)
      setChartData(data)
    })
  }, [coin])

  const options = {
    title: `${coin.toUpperCase()}`,
    curveType: "function",
    legend: {
      position: "bottom",
      textStyle: {color: "white"}
    },
    backgroundColor: "#32322C",
    colors:["#13C4A3"],
    explorer:{},
    hAxis: {
      textStyle: {color: "white"},
      titleTextStyle: {color: "white"}
    },
    vAxis: {
      textStyle: {color: "white"},
      titleTextStyle: {color: "white"}
    },
    titleTextStyle: {color: "white"}
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}></h2>
      { chartData !== undefined && <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />}
    </div>
  );
}
export default LineChart;