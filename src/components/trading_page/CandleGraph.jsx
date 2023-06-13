import React, { useState, useEffect } from "react";
import axios from "axios"
import { Chart } from 'react-google-charts'


function CandleChart({ coin, interval }) {
  const [chartData, setChartData] = useState(undefined)
  useEffect(() => {
    axios(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100`)
    .then((result) => {
      // console.log(result.data.Data.Data)
      return result.data.Data.Data
    })
    .then((result) => {
      // console.log('This is what setChartData sees ', result)
      let data = result.map((point) => {
        let date = new Date(point.time)
        return [date, point.low, point.open, point.close, point.high]
      })
      data.unshift(["Date", "", "", "", ""])
      // console.log('This is the data going to the chart', data)
      setChartData(data)
    })
    .catch((err) => console.log('Did not get info from API', err))
  }, [coin])

  const options = {
    title: `${coin.toUpperCase()} Candles`,
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
    titleTextStyle: {color: "white"},
    bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}></h2>
      { chartData !== undefined && <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />}
    </div>
  );
}
export default CandleChart;