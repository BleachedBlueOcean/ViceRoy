import React, { useState, useEffect } from "react";
import axios from "axios"
import { Chart } from 'react-google-charts'


function LineChart({ coin, interval, height }) {
  const [chartData, setChartData] = useState(undefined)
  useEffect(() => {
    axios(`https://min-api.cryptocompare.com/data/v2/histo${interval}?fsym=${coin[0]}&tsym=USD&limit=100`)
    .then((result) => {
      // console.log(result.data.data)
      return result.data.Data.Data
    })
    .then((result) => {
      // console.log('This is what setChartData sees ', result)
      let data = result.map((point) => {

        return [point.date, point.close]
      })
      data.unshift(["date", `${coin}`])
      // console.log('This is the data going to the chart', data)
      setChartData(data)
    })
  }, [coin, interval])

  const options = {
    title: `${coin}`,
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
      height={height}
      data={chartData}
      options={options}
    />}
    </div>
  );
}
export default LineChart;