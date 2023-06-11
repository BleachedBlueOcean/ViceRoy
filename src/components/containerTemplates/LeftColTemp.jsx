import React from 'react';
import {Container, Paper} from '@mui/material';

const LeftColTemp = ({props}) => (
  <Container maxWidth="lg">
    <Paper sx={{ padding: 2, marginTop: 16 }}>{props}
      <p>each individual box for any given page aside fro mgraphs</p>
    </Paper>
  </Container>
)

export default LeftColTemp;