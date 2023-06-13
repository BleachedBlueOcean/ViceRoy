import React from 'react';
import { Box, Typography } from '@mui/material';

const BadgeRow = ({ badge }) => {
  return (
    <Box>
      <Typography>{badge.icon}</Typography>
      <Typography>{badge.name}</Typography>
    </Box>
  );
};

export default BadgeRow;