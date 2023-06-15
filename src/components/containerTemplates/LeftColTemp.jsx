import React from 'react';
import {Container, Paper} from '@mui/material';

import AccountTotal from '../modals/AccountTotal.jsx'

const LeftColTemp = ({user}) => (
  <Container className="leftColumnContainer" maxWidth="xs" sx={{marginLeft: 0,}}>
    <Paper sx={{ padding: 2, marginTop: 16 }}>
      <AccountTotal user={user}/>
    </Paper>
  </Container>
)

export default LeftColTemp;