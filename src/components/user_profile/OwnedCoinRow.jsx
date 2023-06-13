import React from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin }) => {


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