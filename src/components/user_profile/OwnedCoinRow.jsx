import React from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin }) => {

  // https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR

  return (
    <Box>
      <Typography variant='body1'>{coin.icon}</Typography>
      <Typography variant='body1'>{coin.name}</Typography>
      <Typography variant='body1'>{coin.quantity}</Typography>
      <Typography variant='body1'>{coin.avgBuyVal}</Typography>
      <Typography variant='body1'>{/*average market price*/}</Typography>
      <Typography variant='body1'>{/*Unrealized gain and losses: coin.quantity*market_price - coin.quantity*coin.avgBuyVal   */}</Typography>
    </Box>
  );
};

export default OwnedCoinRow;
//