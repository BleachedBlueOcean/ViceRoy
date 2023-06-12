import React from 'react';
import { Box } from '@mui/material';

const BadgeRow = ({ badge }) => {
  return (
    <Box>
      <div>{badge.icon}</div>
      <div>{badge.name}</div>
    </Box>
  );
};

export default BadgeRow;