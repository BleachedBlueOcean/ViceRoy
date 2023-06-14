import React from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin }) => {
//apoi call for current coin prices
// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR

  return (
    <Box>
      <Typography variant='body1'>{coin.icon}</Typography>
      <Typography variant='body1'>{coin.name}</Typography>
      <Typography variant='body1'>{coin.quantity}</Typography>
      <Typography variant='body1'>{coin.price}</Typography>
    </Box>
  );
};

export default OwnedCoinRow;