import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Typography} from '@mui/material'

//<Line data={}, options={}/>
const HistoricalData = ({user}) => {
  //pass down user,
  // const [cryptoCoins, setCryptoCoins] = useState([]);

  const getCurrentMargin = (prop) => {
    //pass down current coin value, prbly sync with trading page
    //given coin name, find price
    //prop.value * prop.quant || aka coin.quant
    //pull quant from own data
  }

  //USE TO CALC PROFIT/LOSS FOR EACH COIN

  // const profitLossData = cryptoCoins.map((coin) => {
  //   const currMargin = getCurrentMargin(coin.name);
  //   const costBasis = coin.quantity * coin.avgPrice;
  //   const profitLoss = currMargin - costBasis;
  //   return{name: coin.name, profitLoss}
  // })

  //DATA TO BE PASSED IN NEEDS TO BE TESTED
  // const graphData = {
    // labels: profitLossData.map((coin) => coin.name),
    // datasets: [
    //   {
    //     label: 'Profit/Loss',
    //     data: profitLossData.map((coin) => coin.profitLoss),
    //     tension: 0,
    //     fill: false,
    //     backgroundColor: 'green',
    //   },
    // ]
  // }

  // LINE GRAPH OPTIONS TO BE PASSED IN

  // const chartOptions = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       ticks: {
  //         callback: (value) => `$${value.toFixed(2)}`,
  //       },
  //     },
  //   },
  // };



  return (
    <div>
      <Typography>
        Historical Profit/Loss Graph
      </Typography>
      {/* <Line data={graphData} options={chartOptions} /> */}

    </div>
  );
}

export default HistoricalData;