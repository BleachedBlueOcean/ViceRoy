import React, {useState} from 'react';
import {Container, Paper, Stack, Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from '@mui/material';

//consider just using a single execute order button
const CryptoBuySellTemp = ({props}) => {
  const [buyAmt, setBuyAmt] = useState('');
  const [sellAmt, setSellAmt] = useState('');

  const handleBuy = (e) => {
    setBuyAmt(e.target.value)
  }
  const handleSell = (e) => [
    setSellAmt(e.target.value)
  ]

  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2, marginTop: 16 }}>{props}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size="small">Buy Amount</TableCell>
                <TableCell size="small">Price Point</TableCell>
                <TableCell size="small">Sell Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell size="small">
                  <TextField
                    size="small"
                    type="number"
                    value={buyAmt}
                    onChange={handleBuy}
                  />
                </TableCell>
                <TableCell size="small">stream live price here </TableCell>
                <TableCell size="small">
                  <TextField
                    size="small"
                    type="number"
                    value={sellAmt}
                    onChange={handleSell}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Stack spacing={2} direction="row">
          {/* <Button variant="contained">ExecuteOrder</Button> */}
          <Button variant="contained">Buy</Button>
          <Button variant="contained">Sell</Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CryptoBuySellTemp;