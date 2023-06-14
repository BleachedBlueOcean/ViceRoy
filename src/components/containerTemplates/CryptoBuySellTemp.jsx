import React, {useState, useEffect} from 'react';
import {Container, Paper, Stack, Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from '@mui/material';
import axios from 'axios';
import controllers from '../../backend/controllers/index.js'

//consider just using a single execute order button
const CryptoBuySellTemp = ({ props, coin, user, setUser }) => {
  const [buyAmt, setBuyAmt] = useState('');
  const [sellAmt, setSellAmt] = useState('');
  const [price, setPrice] = useState('');

  // useEffect(() => {
  //   let updatePrice = () => {
  //     axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${coin[0]}&tsyms=USD`)
  //       .then((result) => {
  //         console.log('This is what the buy click gets for current value ', result.data.USD)
  //         setPrice(result.data.USD)
  //       }
  //     )
  //   }
  //   updatePrice()
  //   let intervalId = setInterval(updatePrice, 10000);
  //   return () => clearInterval(intervalId)
  //   },
  // [coin])

  const handleBuy = (e) => {
    setBuyAmt(e.target.value)
  }
  const handleSell = (e) => [
    setSellAmt(e.target.value)
  ]

  const handleBuyClick = (e) => {
    e.preventDefault()
    if((buyAmt * price) > user.availableCash) {
      console.log("Sorry, you don't seem to have enough funds for this trade at this time")
    } else {
      // setUser and update DB
      let currentCoinIdx = null;
      let currentCoin = null;
      let newBalance = user.availableCash - (buyAmt * price)
      for(var i = 0; i < user.coinsOwned.length; i++ ) {
        if(user.coinsOwned[i].icon === coin) {
          currentCoinIdx = i
          currentCoin = user.coinsOwned[i]
        }
      }
      if(currentCoin === null) {
        currentCoin = {
          name: coin[1],
          icon: coin[0],
          quantity: buyAmt,
          avgBuyVal: price,
          favorite: false
        }
        currentCoinIdx = 0;
      }
      const form = {...user, coinsOwned: [currentCoin], availableCash: newBalance}
      setUser(form);
      console.log('this is form', form.id)
        // console.log('this is form id', form.id)
       controllers.updateUser(form.id, form);
    }
    // grab current balance and purchase price
    // if current balance and purchase price don't allow for sale refuse transaction
    // if good proceed and update user profile

  }

  const handleSellClick = (e) => {
    e.preventDefault()
    // grab current profile and coin balances
    // if coin balances do not allow for transaction refuse.
    // if good proceed and update user profile
  }

  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2, marginTop: 16 }}>{props}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size="small">Buy Amount</TableCell>
                <TableCell size="small">Price Point of {coin}</TableCell>
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
                <TableCell size="small">$ {price} </TableCell>
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
          <Button variant="contained" onClick={handleBuyClick}>Buy</Button>
          <Button variant="contained" onClick={handleSellClick}>Sell</Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CryptoBuySellTemp;