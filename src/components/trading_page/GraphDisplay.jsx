import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx';
import GraphNavTemp from '../containerTemplates/GraphNavTemp.jsx';
import CryptoBuySellTemp from '../containerTemplates/CryptoBuySellTemp.jsx';

function GraphDisplay({coinOptions}) {
  const [coin, setCoin] = useState('BTC')
  const [interval, setInterval] = useState('day')
  const [view, setView] = useState('line')
  return(
    <div>
      <GraphNavTemp coinOptions={coinOptions} interval={interval} setInterval={setInterval} coin={coin} setCoin={setCoin} view ={view} setView={setView} />
      <div className="graph">
         {view === 'candle' && <CandleChart interval={interval} coin={coin} height={"400px"}/>}
        {view === 'line' && <LineChart interval={interval} coin={coin} height={"400px"}/>}
        <CryptoBuySellTemp />
      </div>
    </div>

  )
}
export default GraphDisplay;