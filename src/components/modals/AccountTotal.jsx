import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, CardContent, CardActions, Typography} from '@mui/material';

// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD
const AccountTotal = ({user}) => {

  const [currPrice, setCurrPrice] = useState(undefined)


  // const getCurrent = () => {
  //   //grab list of coins
  // }


  const calcAssets = () => {
    //set to unrealized gain/loss
    const buyIn = user.coinsOwned.reduce((acc, user) => {
      return (acc + (user.quantity * user.avgBuyVal))
    }, 0)

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
            Unrealized Gain/Loss: ${calcAssets()}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default AccountTotal



