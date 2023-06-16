import React, {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';

const OwnedCoinRow = ({ coin, liveValue, updateUnrealizedGains }) => {
 //api call for current coin prices
 //https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR
  // console.log('this is coin', coin);
  const [finalValue, setFinalValue] = useState(0);

  const calculate = () =>{
    // console.log('calculating...')
    const val = (coin.quantity*liveValue) - (coin.quantity*coin.avgBuyVal);
    setFinalValue(val);
    updateUnrealizedGains(val);
    return val;
  };

  const setVal = () => {
    setFinalValue(calculate());
    return finalValue;
  };

  useEffect(()=>{
    calculate();
  }, []);

  return (
    <Box sx={{
      margin: '1rem',
    }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
      }}>
        <Typography variant='body1' sx={{color: 'black'}}>{coin.icon}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{coin.name}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{parseFloat(coin.quantity).toFixed(5)}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{parseFloat(coin.avgBuyVal).toFixed(2)}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{parseFloat(liveValue).toFixed(2)}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{parseFloat(finalValue).toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default OwnedCoinRow;
