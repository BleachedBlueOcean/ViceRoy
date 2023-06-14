import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardActions, Typography} from '@mui/material';


const AccountTotal = ({user}) => {

    return (
      <Card>
        <CardContent>
          <Typography>
            Account Summary for {user.firstName} {user.lastName}
          </Typography>
          <Typography>
            Available Purchasing Power: {user.availableCash}
          </Typography>
          <Typography>
            Total Assets: {user.totalAssets}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default AccountTotal