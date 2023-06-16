import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from 'react-google-charts';


const LineChart = ({ coin, interval, height }) => {
  const [chartData, setChartData] = useState(undefined);
  useEffect(() => {
    axios.get(`https://min-api.cryptocompare.com/data/v2/histo${interval}?fsym=${coin[0]}&tsym=USD&limit=100`)
    .then((result) => {
      // console.log(result.data.data)
      return result.data.Data.Data;
    })
    .then((result) => {
      // console.log('This is what setChartData sees ', result)
      let data = result.map((point) => {
        let date = new Date(point.time * 1000);
        return [date, point.close];
      });
      data.unshift(["date", `${coin}`]);
      // console.log('This is the data going to the chart', data)
      setChartData(data);
    });
  }, [coin, interval]);

  const options = {
    curveType: "function",
    legend: "none",
    backgroundColor: "#32322C",
    colors: ["#13C4A3"],
    explorer: {maxZoomOut: 1},
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
      { chartData !== undefined && <Chart
      chartType="LineChart"
      width="100%"
      height={height}
      data={chartData}
      options={options}
    />}
    </div>
  );
};
export default LineChart;