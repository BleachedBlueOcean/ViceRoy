import React from 'react';
import { Box } from '@mui/material';
import BadgeRow from './BadgeRow';

const CompletedAchievements = ({ badges }) => {

  return (
    <Box>
      {badges.map((badge, i) => <BadgeRow key={i} badge={badge} />)}
    </Box>
  );
}

export default CompletedAchievements;