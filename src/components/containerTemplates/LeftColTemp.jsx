import React from 'react';
import {Container, Paper} from '@mui/material';

const LeftColTemp = ({props}) => (
  <Container maxWidth="lg">
    <Paper sx={{ padding: 2, marginTop: 16 }}>{props}</Paper>
  </Container>
)

export default LeftColTemp;