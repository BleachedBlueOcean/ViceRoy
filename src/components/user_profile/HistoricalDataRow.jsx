import React from 'react';
import { Box } from '@mui/material';

const HistoricalDataRow = ({ coin }) => {
  return (
    <Box>
      <div>{coin.name}</div>
      <div>{coin.quantity}</div>
      <div>{coin.price * coin.quantity}</div>
    </Box>
  );
};

export default HistoricalDataRow;