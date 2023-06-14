import React, { useState, useEffect } from 'react';
import GraphDisplay from './GraphDisplay.jsx'
import News from './News.jsx';
import NewsList from './NewsList.jsx';
import axios from "axios"

function Trading({user}){
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

    // useEffect(() => {
    //     axios(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD`)
    //     .then((result) => {
    //       console.log('coinOptions data', result.data.Data)
    //       return result.data.Data
    //     })
    //     .then((result) => {
    //       // console.log('This is what setChartData sees ', result)
    //       let data = result.map((point, index) => {
    //         return [index, point]
    //       })
    //       // console.log('This is the data going to the chart', data)
    //       setCoinOptions(data)
    //     })
    //     .catch((err) => console.log('Did not get info from API', err))
    //   }, [])

    return(
        <>
        {/* <LineChart coin={'bitcoin'} interval={'d1'}/> */}
        <GraphDisplay coinOptions={coinOptions} user={user}/>
        {/* <News/> */}
        {/* <NewsList/> */}
        </>
    )

}

export default Trading;