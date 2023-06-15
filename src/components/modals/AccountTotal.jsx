import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, CardContent, CardActions, Typography} from '@mui/material';

// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD
const AccountTotal = ({user, unrealizedGains}) => {

  const calcAssets = () => {
    //set to unrealized gain/loss
    const buyIn = unrealizedGains.reduce((acc, user) => acc + user, 0)

    // const sellAll =
    return buyIn.toFixed(2)
  }

    return (
      <Card>
        <CardContent>
          <Typography>
            Account Summary for {user.firstName} {user.lastName}
          </Typography>
          <Typography>
            Available Purchasing Power: ${user.availableCash}
          </Typography>
          <Typography>
            {/* Unrealized Gain/Loss: ${calcAssets()} */}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default AccountTotal



