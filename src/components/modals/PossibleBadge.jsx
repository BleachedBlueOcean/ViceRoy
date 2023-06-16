import React from 'react';
import { Dialog, Box, Typography, DialogTitle, Button } from '@mui/material';
import {
  Money,
  Sailing,
  ThumbDown,
  ChildCare,
  TrendingUp,
  Hail,
  SportsMartialArts,
  Castle,
  Whatshot,
  Paid
} from '@mui/icons-material';

const PossibleBadge = ({ achievedBadges, dialogOpen, closeDialog }) => {
  const badgesData = [
    { title: "Looks like you know what you're doing",
      icon: 'Money',
      description: "Earn $1000 in Net Profit"
    },
    {title: "Wolf of Wall Street",
      icon: 'Sailing',
      description: "Earn $5000 in Net Profit"
    },
    {title: "Sheep of Wall Street",
      icon: 'ThumbDown',
      description: "Lose $1000 in total"
    },
    {title: "You know how to read",
      icon: 'ChildCare',
      description: "Make your first Purchase"
    },
    {title: "You might regret this",
      icon: 'TrendingUp',
      description: "Make your first Sale"
    },
    {title: "Look at me I'm important!",
      icon: 'Hail',
      description: "Make the leaderboard for the first time"
    },
    { title: "You're #1! and Enemy #1",
      icon: 'SportsMartialArts',
      description: "Make the top of the leaderboard"
    },
    {title: "The Viceroy",
      icon: 'Castle',
      description: "Double your total and lose half within a week"
    },
    {title: "The Phoenix",
      icon: 'Whatshot',
      description: "Lose half your total and earn back double within a week"
    },
    {title: "Coin Hungry",
      icon: 'Paid',
      description: "Own more than 5 types of coins"
    }
  ];
  const iconComponents = {
    Money,
    Sailing,
    ThumbDown,
    ChildCare,
    TrendingUp,
    Hail,
    SportsMartialArts,
    Castle,
    Whatshot,
    Paid
  }

  return (
    <Dialog onClose={closeDialog} open={dialogOpen} maxWidth={'lg'} >
      <DialogTitle sx={{ fontSize: '2rem', textDecoration: 'underline' }}>Achievements</DialogTitle>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: '1' }}>
          {badgesData.map((badge, index) => {
            const IconComponent = iconComponents[badge.icon];
            console.log('achieved badges', achievedBadges);
            const isAchieved = achievedBadges.filter((achievedBadge => achievedBadge.name === badge.title));

            return (
              <Box key={index} sx={{ display: 'flex', marginTop: '0.5rem' }} >
                <IconComponent sx={{ marginRight: '1rem' }} />
                <Typography
                  variant='body1'
                  sx={isAchieved.length
                    ? { color: 'black', whiteSpace: 'nowrap', flexGrow: '1' }
                    : { color: '#d9d9d9', whiteSpace: 'nowrap', flexGrow: '1' }} >
                  {badge.title}
                </Typography>
              </Box>
            )
          })}
        </Box>
        <Box sx={{ flexGrow: '1' }}>
          {badgesData.map((badge, index) => {
            const isAchieved = achievedBadges.filter((achievedBadge => achievedBadge.name === badge.title));

            return (
              <Box key={index} sx={{ display: 'flex', marginTop: '0.5rem' }} >
                <Typography
                variant='body1'
                sx={isAchieved.length
                  ? { color: 'black', marginLeft: '3rem', whiteSpace: 'nowrap', flexGrow: '1' }
                  : { color: '#d9d9d9', marginLeft: '3rem', whiteSpace: 'nowrap', flexGrow: '1' }} >
                {badge.description}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Button onClick={closeDialog} sx={{ width: '25%', marginTop: '2rem', marginLeft: 'auto' }}>Close</Button>
    </Dialog>
  );
};

export default PossibleBadge;