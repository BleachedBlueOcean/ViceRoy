import React from 'react';
import { Dialog, Box, Typography, DialogTitle } from '@mui/material';

const PossibleBadge = ({ badgesData, achievedBadges, setShowBadgesModal }) => {

  return (
    <Dialog >
      <DialogTitle>Achievements</DialogTitle>
      {badgesData.map((badge, index) => {
        return (
          <Box key={index} >
            <Typography variant='body1'>{badge.icon}</Typography>
            <Typography variant='body1'>{badge.title}</Typography>
            <Typography variant='body1'>{badge.description}</Typography>
          </Box>
        )
      })}
    </Dialog>
  );
};

export default PossibleBadge;