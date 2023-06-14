import React from 'react';
import { Box, Typography } from '@mui/material';

const BadgeRow = ({ badge, iconComponents }) => {
  const IconComponent = iconComponents[badge.icon];

  return (
    <Box>
      <IconComponent />
      <Typography>{badge.name}</Typography>
    </Box>
  );
};

export default BadgeRow;