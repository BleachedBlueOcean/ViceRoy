import React, { useState, useEffect } from 'react';
import GraphDisplay from './GraphDisplay.jsx';
import NewsList from './NewsList.jsx';
import axios from "axios"
import WatchList from './WatchList.jsx';
import AccountTotal from '../modals/AccountTotal.jsx'
import controllers from '../../backend/controllers/index.js';
import { Box } from '@mui/material'
function Trading({user, setUser, guest, unrealizedGains}){
    const [coinOptions, setCoinOptions] = useState([
        [
            "BTC",
            "Bitcoin"
        ],
        [
            "ETH",
            "Ethereum"
        ],
        [
            "XRP",
            "XRP"
        ],
        [
            "USDT",
            "Tether"
        ],
        [
            "BNB",
            "Binance Coin"
        ],
        [
            "BUSD",
            "Binance USD"
        ],
        [
            "TUSD",
            "True USD"
        ],
        [
            "USDC",
            "USD Coin"
        ],
        [
            "SOL",
            "Solana"
        ],
        [
            "LINA",
            "Linear"
        ],
        [
            "MATIC",
            "Polygon"
        ],
        [
            "LTC",
            "Litecoin"
        ],
        [
            "ADA",
            "Cardano"
        ],
        [
            "ARB",
            "Arbitrum"
        ],
        [
            "SUI",
            "Sui"
        ],
        [
            "DOGE",
            "Dogecoin"
        ],
        [
            "FIL",
            "FileCoin"
        ],
        [
            "MTL",
            "Metal"
        ],
        [
            "FTM",
            "Fantom"
        ],
        [
            "ARPA",
            "ARPA Chain"
        ],
        [
            "AVAX",
            "Avalanche"
        ],
        [
            "CFX",
            "Conflux Network"
        ],
        [
            "LUNC",
            "Terra Classic"
        ],
        [
            "TRX",
            "TRON"
        ],
        [
            "APT",
            "Aptos"
        ],
        [
            "PEPE",
            "Pepe"
        ],
        [
            "OP",
            "Optimism"
        ],
        [
            "EOS",
            "EOS"
        ],
        [
            "LINK",
            "Chainlink"
        ],
        [
            "RNDR",
            "Render Token"
        ],
        [
            "UNI",
            "Uniswap Protocol Token"
        ],
        [
            "SXP",
            "SXP"
        ],
        [
            "SHIB",
            "Shiba Inu"
        ],
        [
            "ALPHA",
            "Alpha Finance Lab"
        ],
        [
            "TOMO",
            "TomoChain"
        ],
        [
            "XMR",
            "Monero"
        ],
        [
            "DOT",
            "Polkadot"
        ],
        [
            "INJ",
            "Injective"
        ],
        [
            "DYDX",
            "dYdX"
        ],
        [
            "APE",
            "ApeCoin"
        ],
        [
            "ATOM",
            "Cosmos"
        ],
        [
            "XLM",
            "Stellar"
        ],
        [
            "GALA",
            "Gala"
        ],
        [
            "BETH",
            "Beacon ETH"
        ],
        [
            "SAND",
            "The Sandbox"
        ],
        [
            "AXS",
            "Axie Infinity Shards"
        ],
        [
            "ID",
            "SPACE"
        ],
        [
            "BLUR",
            "Blur"
        ],
        [
            "HT",
            "Huobi Token"
        ],
        [
            "AGI",
            "SingularityNET"
        ],
        [
            "ETC",
            "Ethereum Classic"
        ],
        [
            "LDO",
            "Lido DAO"
        ],
        [
            "CRV",
            "Curve DAO Token"
        ],
        [
            "KAVA",
            "Kava"
        ],
        [
            "NEAR",
            "Near"
        ],
        [
            "FET",
            "Fetch.AI"
        ],
        [
            "ATM",
            "Atletico de Madrid Fan Token"
        ],
        [
            "MASK",
            "Mask Network"
        ],
        [
            "ICP",
            "Internet Computer"
        ],
        [
            "MANA",
            "Decentraland"
        ],
        [
            "CTC",
            "Creditcoin"
        ],
        [
            "ALGO",
            "Algorand"
        ],
        [
            "BCH",
            "Bitcoin Cash"
        ],
        [
            "RAD",
            "Radicle"
        ],
        [
            "CHZ",
            "Chiliz"
        ],
        [
            "MAGIC",
            "Magic"
        ],
        [
            "GAL",
            "Galxe"
        ],
        [
            "GMT",
            "STEPN"
        ],
        [
            "OG",
            "OG Fan Token"
        ],
        [
            "FCT",
            "FirmaChain"
        ],
        [
            "ALPINE",
            "Alpine F1 Team Fan Token"
        ],
        [
            "GRT",
            "The Graph"
        ],
        [
            "NEO",
            "NEO"
        ],
        [
            "HOOK",
            "Hooked Protocol"
        ],
        [
            "QNT",
            "Quant"
        ],
        [
            "LUNA",
            "Terra"
        ],
        [
            "USDP",
            "Pax Dollar"
        ],
        [
            "CAKE",
            "PancakeSwap"
        ],
        [
            "STX",
            "Stacks"
        ],
        [
            "VET",
            "VeChain"
        ],
        [
            "RUNE",
            "Thorchain"
        ],
        [
            "HBAR",
            "Hedera Hashgraph"
        ],
        [
            "WBTC",
            "Wrapped Bitcoin"
        ],
        [
            "KEY",
            "SelfKey"
        ],
        [
            "CTXC",
            "Cortex"
        ],
        [
            "ANKR",
            "Ankr Network"
        ],
        [
            "SANTOS",
            "Santos FC Fan Token"
        ],
        [
            "AXL",
            "Axelar"
        ],
        [
            "WSTETH",
            "Lido wstETH"
        ],
        [
            "MKR",
            "Maker"
        ],
        [
            "ABBC",
            "ABBC Coin"
        ],
        [
            "CBETH",
            "Coinbase Wrapped Staked ETH"
        ],
        [
            "ONE",
            "Harmony"
        ],
        [
            "ZEC",
            "ZCash"
        ],
        [
            "ROSE",
            "Oasis Labs"
        ],
        [
            "AAVE",
            "Aave"
        ],
        [
            "ACH",
            "Alchemy Pay"
        ],
        [
            "FLOW",
            "Flow"
        ],
        [
            "MBL",
            "MovieBloc"
        ],
        [
            "ZIL",
            "Zilliqa"
        ]
    ])
    const [dynamicCoin, setDynamicCoin] = useState(['ETH', 'Ethereum'])

    const [watched, setWatched] = useState([["BTC", "Bitcoin"]])
    const getWatched = () => {
        user.watchList
        setWatched(user.watchList.map((watch) => watch.coin))
    }
    useEffect(()=>{if (guest === false) {getWatched()}}, [])
    useEffect(()=>{
        if (guest === false) {
            controllers.updateUser(user.id, {watchList: watched.map((watch) => ({coin: watch}))
            })
        }
    }, [watched])

    return(
        <>
        <div className='trading-page' style={{display: 'flex', flexDirection: 'row'}}>
            <Box className='trading-leftcol' sx={{
                  width: '24%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginLeft: '1rem',
                  marginTop: '1rem',
            }}>
                <AccountTotal user={user} unrealizedGains={unrealizedGains}/>
                <NewsList watched={watched}/>
                <WatchList coinOptions={coinOptions} user={user} setDynamicCoin={setDynamicCoin} watched={watched} setWatched={setWatched}/>
            </Box>
            <Box className='trading-rightcol' >
              <GraphDisplay className="Graphtopbar" coinOptions={coinOptions} user={user} setUser={setUser} dynamic={false} dynamicCoin={dynamicCoin}/>
              <div className='dynamic-graph'>
                <GraphDisplay coinOptions={coinOptions} user={user} setUser={setUser} dynamic={true} dynamicCoin={dynamicCoin}/>
              </div>
            </Box>
        </div>
        {/* <GraphDisplay coinOptions={coinOptions} user={user} setUser={setUser} dynamic={false} dynamicCoin={dynamicCoin}/>
        <div className='dynamic-graph'>
        <GraphDisplay coinOptions={coinOptions} user={user} setUser={setUser} dynamic={true} dynamicCoin={dynamicCoin}/>
        </div> */}
        {/* <NewsList watched={watched}/>
        <WatchList coinOptions={coinOptions} user={user} setDynamicCoin={setDynamicCoin} watched={watched} setWatched={setWatched}/> */}
        </>
    );

};

export default Trading;