import React from 'react';
import { Box } from '@mui/material';

const BadgeRow = ({ badge }) => {
  return (
    <Box>
      <div>{badge.name}</div>
      <div>{badge.quantity}</div>
      <div>{badge.price * coin.quantity}</div>
    </Box>
  );
};

export default BadgeRow;