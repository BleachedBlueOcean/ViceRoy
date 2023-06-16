import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardActions, Typography} from '@mui/material';

// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD
const AccountTotal = ({user, unrealizedGains}) => {

  const calcAssets = () => {
    if(unrealizedGains.length > 0) {
    const arryL = unrealizedGains?.length
    const usage = unrealizedGains?.slice(0, (arryL/2))
    const buyIn = usage?.reduce((acc, user) => acc + user, 0)
    const val = buyIn?.toFixed(2)
    return buyIn?.toFixed(2)
    }
    return 0
  }

  const summaryStyle={
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px'
  }


    return (
      <Card>
        <CardContent>
          <Typography sx={ {fontWeight: 'bold', fontSize: '25px', margin: '10px'}}>
            Account Summary for {user.firstName} {user.lastName}
          </Typography>
          <Typography>
            Available Purchasing Power: 
          </Typography>
          <Typography sx={summaryStyle}>
            ${user.availableCash.toFixed(2)}
          </Typography>
          <Typography>
            Unrealized Gain/Loss:
          </Typography>
          <Typography sx={summaryStyle}>
            ${calcAssets()}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default AccountTotal



