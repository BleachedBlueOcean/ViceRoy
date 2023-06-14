import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardActions, Typography} from '@mui/material';


const AccountTotal = ({user}) => {

  const calcAssets = () => {
   const result = user.coinsOwned.reduce((acc, user) => {
    return (acc + (user.quantity * user.avgBuyVal))
    }, user.availableCash)
    return result.toFixed(2)
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
            Total Assets: ${calcAssets()}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default AccountTotal



