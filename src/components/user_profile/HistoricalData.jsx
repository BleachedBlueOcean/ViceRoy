import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Box, Typography} from '@mui/material';
import LineChart from '../trading_page/LineGraph.jsx';

//<Line data={}, options={}/>
const HistoricalData = ({user}) => {
  //pass down user,
  // const [cryptoCoins, setCryptoCoins] = useState([]);

  // const getCurrentMargin = () => {
    // let avgAsset = user.
    //pass down current coin value, prbly sync with trading page
    //given coin name, find price
    //prop.value * prop.quant || aka coin.quant
    //pull quant from own data
  // }

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
    <Box className="historicalData" sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '70vw',
    }}>
      <Typography>
        Historical Profit/Loss Graph
      </Typography>
      {/* <Line data={graphData} options={chartOptions} /> */}
      <LineChart coin={['ETH']} height={'70vh'} interval={'day'}/>
    </Box>
  );
};

export default HistoricalData;
