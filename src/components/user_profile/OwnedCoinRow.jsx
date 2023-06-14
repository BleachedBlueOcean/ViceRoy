import React, {useEffect} from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin,unrealizedGains,liveValue, setUnrealizedGains }) => {
 //api call for current coin prices
 //https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR

  const calculate = () =>{
    return (coin.quantity*liveValue) - (coin.quantity*coin.avgBuyVal)
  }

  useEffect(()=>{
    setUnrealizedGains([...unrealizedGains, calculate()]);
  }, [])

  return (
    <Box>
      <Typography variant='body1'>{coin.icon}</Typography>
      <Typography variant='body1'>{coin.name}</Typography>
      <Typography variant='body1'>Quantity: {coin.quantity}</Typography>
      <Typography variant='body1'>Average Buy Value: {coin.avgBuyVal}</Typography>
      <Typography variant='body1'>Current Value: {liveValue}</Typography>
      <Typography variant='body1'>Unrealized gain and losses:{calculate()}</Typography>
    </Box>
  );
};

export default OwnedCoinRow;
//