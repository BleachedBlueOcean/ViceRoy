import React, { useState } from 'react';
import { Box } from '@mui/material';
import BadgeRow from './BadgeRow';
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

const CompletedAchievements = ({ achievedBadges, setShowBadgesModal, showBadgesModal }) => {

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
    <Box onClick={() => setShowBadgesModal(true)}>
      {/* {achievedBadges.map((badge, i) => <BadgeRow key={i} badge={badge} iconComponents={iconComponents} />)} */}
    </Box>
  );
}

export default CompletedAchievements;