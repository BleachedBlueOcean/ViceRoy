import React from 'react';
import { Modal, Box, Button } from '@mui/material';

const PossibleBadge = ({ badgesData, achievedBadges, setShowBadgesModal }) => {

  return (
    <Modal>
      <Button onClick={() => setShowBadgesModal(false)}>Close</Button>
      {badgesData.map((badge, index) => {
        const name = Object.keys(badge)[0];
        return (
          <Box key={index} >
            <div>{badge.icon}</div>
            <div>{name}</div>
            <div>{badge.description}</div>
          </Box>
        )
      })}
    </Modal>
  );
};

export default PossibleBadge;