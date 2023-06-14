import React from 'react';
import { Box, Typography } from '@mui/material';
import OwnedCoinRow from './OwnedCoinRow';

const SelfCoins_Values = ({ ownedCoins }) => {

  return (
    <Box>
      <Box>
        <Typography variant='h3'>Owned Coins</Typography>
      </Box>
      {/* {ownedCoins.map((coin, i) => <OwnedCoinRow key={i} coin={coin} />)} */}
    </Box>
  );
}

export default SelfCoins_Values;