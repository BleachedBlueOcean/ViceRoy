import React, {useState, useEffect} from 'react';
import {Container, Paper, Stack, Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from '@mui/material';
import axios from 'axios';
import controllers from '../../backend/controllers/index.js'

//consider just using a single execute order button
const CryptoBuySellTemp = ({ props, coin, user, setUser }) => {
  const [buyAmt, setBuyAmt] = useState('');
  const [sellAmt, setSellAmt] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    let updatePrice = () => {
      axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${coin[0]}&tsyms=USD`)
        .then((result) => {
          console.log('This is what the buy click gets for current value ', result.data.USD)
          setPrice(result.data.USD)
        }
      )
    }
    updatePrice()
    let intervalId = setInterval(updatePrice, 10000);
    return () => clearInterval(intervalId)
    },
  [coin])

  const updating = (form) => {
      setUser(form);
      console.log('this is form', form.id)
      // console.log('this is form id', form.id)
     controllers.updateUser(form.id, form);
    }

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
        console.log('This is what is being evaluateed in user.coinsOwned', user.coinsOwned[i])
        if(user.coinsOwned[i].icon === coin[0]) {
          currentCoinIdx = i
          currentCoin = user.coinsOwned
        }
      }
      if(currentCoin === null) {
        console.log('This is the first purchase of this coin')
        currentCoin = {
          name: coin[1],
          icon: coin[0],
          quantity: Number(buyAmt),
          avgBuyVal: price,
          favorite: false
        }
        let update = user.coinsOwned
        update.push(currentCoin)
        const form = {...user, coinsOwned: update, availableCash: newBalance};
        updating(form);
      } else {
        console.log('This is the currentCoin', currentCoin)
        console.log('currentCoinIdx', currentCoinIdx)
        console.log('This is the currentCoin[currentCoinIdx]', currentCoin[currentCoinIdx])
        let updateCurrCoin = {
          ...currentCoin[currentCoinIdx],
          avgBuyVal: ((currentCoin[currentCoinIdx].quantity * currentCoin[currentCoinIdx].avgBuyVal) + (Number(buyAmt) * price))/(currentCoin[currentCoinIdx].quantity + buyAmt),
          quantity: Number(currentCoin[currentCoinIdx].quantity) + Number(buyAmt),
        }
        console.log('This is NOT the first purchase of this coin')
        let update = user.coinsOwned
        update[currentCoinIdx] = updateCurrCoin
        const form = {...user, coinsOwned: update, availableCash: newBalance};
        updating(form);
      }
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
    let coinOwned = false;
    let coinOwnedIdx = null;
    for(var i = 0; i < user.coinsOwned.length; i++) {
      if(user.coinsOwned[i].icon === coin[0]) {
        console.log('You own ', user.coinsOwned[i].icon)
        coinOwned = true;
        coinOwnedIdx = i
      }
    }
    if(coinOwned && user.coinsOwned[coinOwnedIdx].quantity >= sellAmt) {
      console.log('Congrats you have enough to sell')
      console.log('This is the currentCoin', user.coinsOwned)
      console.log('coinOwnedIdx', coinOwnedIdx)
      console.log('This is the currentCoin[currentCoinIdx]', user.coinsOwned[coinOwnedIdx])
      let updateCurrCoin = {
        ...user.coinsOwned[coinOwnedIdx],
        quantity: Number(user.coinsOwned[coinOwnedIdx].quantity) - Number(sellAmt)
      }
      let newBalance = user.availableCash + (sellAmt * price)
      let update = user.coinsOwned
      update[coinOwnedIdx] = updateCurrCoin
      const form = {...user, coinsOwned: update, availableCash: newBalance};
      console.log('This is what we are about to update the user to ', form)
      updating(form);
    }
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