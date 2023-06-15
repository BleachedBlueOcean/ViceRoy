import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx';
import GraphNavTemp from '../containerTemplates/GraphNavTemp.jsx';
import CryptoBuySellTemp from '../containerTemplates/CryptoBuySellTemp.jsx';
import { Box } from '@mui/material';

const GraphDisplay = ({coinOptions, user, setUser, dynamic, dynamicCoin }) => {
  const [coin, setCoin] = useState([`BTC`,`Bitcoin`])
  const [interval, setInterval] = useState('day')
  const [view, setView] = useState('line')
  if (dynamic) {
    return (
      <Box className="second-graph">
        <GraphNavTemp coinOptions={[[dynamicCoin]]} interval={interval} setInterval={setInterval} coin={dynamicCoin} setCoin={setCoin} view ={view} setView={setView} />
        <div className="graph">
          {view === 'candle' && <CandleChart interval={interval} coin={dynamicCoin} height={"400px"}/>}
          {view === 'line' && <LineChart interval={interval} coin={dynamicCoin} height={"400px"}/>}
          <CryptoBuySellTemp coin={dynamicCoin} user={user} setUser={setUser}/>
        </div>
      </Box>
    );
  }
  return (
    <Box className="main-graph" sx={{
    }}>
      <GraphNavTemp coinOptions={coinOptions} interval={interval} setInterval={setInterval} coin={coin} setCoin={setCoin} view ={view} setView={setView} />
      <div className="graph">
         {view === 'candle' && <CandleChart interval={interval} coin={coin} height={"400px"}/>}
        {view === 'line' && <LineChart interval={interval} coin={coin} height={"400px"}/>}
        <CryptoBuySellTemp coin={coin} user={user} setUser={setUser}/>
      </div>
    </Box>

  );
};
export default GraphDisplay;