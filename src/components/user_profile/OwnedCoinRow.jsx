import React, {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin, liveValue, updateUnrealizedGains }) => {
 //api call for current coin prices
 //https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
  console.log('this is coin', coin)
  const [finalValue, setFinalValue] = useState(0)

  const calculate = () =>{
    console.log('calculating...')
    const val = (coin.quantity*liveValue) - (coin.quantity*coin.avgBuyVal)
    setFinalValue(val);
    updateUnrealizedGains(val);
    return val;
  }

  const setVal = () => {
    setFinalValue(calculate());
    return finalValue;
  }

  useEffect(()=>{
       calculate();
  },[])

  return (
    <>
      <Box>
        <Typography variant='body1'>{coin.icon}</Typography>
        <Typography variant='body1'>{coin.name}</Typography>
        <Typography variant='body1'>Quantity: {coin.quantity}</Typography>
        <Typography variant='body1'>Average Buy Value: {coin.avgBuyVal}</Typography>
        <Typography variant='body1'>Current Value: {liveValue}</Typography>
        <Typography variant='body1'>Unrealized gain and losses:{finalValue}</Typography>
      </Box>
    </>
  );
};

export default OwnedCoinRow;
//