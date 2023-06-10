import React, { useState } from 'react';
import { Box } from '@mui/material';
import BadgeRow from './BadgeRow';
import PossibleBadge from './PossibleBadge';

const CompletedAchievements = ({ achievedBadges }) => {
  const [showBadgesModal, setShowBadgesModal] = useState(false);
  const badgesData = [
    {"Looks like you know what you're doing": {
      icon: '',
      description: "Earn $1000 in Net Profit"
    }},
    {"Wolf of Wall Street": {
      icon: '',
      description: "Earn $5000 in Net Profit"
    }},
    {"Sheep of Wall Street": {
      icon: '',
      description: "Lose $1000 in total"
    }},
    {"You know how to read": {
      icon: '',
      description: "Make your first Purchase"
    }},
    {"You might regret this": {
      icon: '',
      description: "Make your first Sale"
    }},
    {"Look at me I'm important!": {
      icon: '',
      description: "Make the leaderboard for the first time"
    }},
    {"You're #1! and Enemy #1": {
      icon: '',
      description: "Make the top of the leaderboard"
    }},
    {"The Viceroy": {
      icon: '',
      description: "Double your total and lose half within a week"
    }},
    {"The Phoenix": {
      icon: '',
      description: "Lose half your total and earn back double within a week"
    }},
    {"Coin Hungry": {
      icon: '',
      description: "Own more than 5 types of coins"
    }}
  ]

  return (
    <Box onClick={() => setShowBadgesModal(true)}>
      {showBadgesModal && <PossibleBadge badgesData={badgesData} achievedBadges={achievedBadges} setShowBadgesModal={setShowBadgesModal} />}
      {achievedBadges.map((badge, i) => <BadgeRow key={i} badge={badge} />)}
    </Box>
  );
}

export default CompletedAchievements;