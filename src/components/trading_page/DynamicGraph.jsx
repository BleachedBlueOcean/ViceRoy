import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx';
import GraphNavTemp from '../containerTemplates/GraphNavTemp.jsx';
import CryptoBuySellTemp from '../containerTemplates/CryptoBuySellTemp.jsx';

function DynamicGraph({coinOptions, dynamicCoin}) {
  const [coin, setCoin] = useState('BTC')
  const [interval, setInterval] = useState('day')
  const [view, setView] = useState('line')
  return(
    <div>
      <GraphNavTemp coinOptions={coinOptions} interval={interval} setInterval={setInterval} coin={dynamicCoin} setCoin={setCoin} view ={view} setView={setView} />
      <div className="graph">
         {view === 'candle' && <CandleChart interval={interval} coin={dynamicCoin} height={"400px"}/>}
        {view === 'line' && <LineChart interval={interval} coin={dynamicCoin} height={"400px"}/>}
        <CryptoBuySellTemp />
      </div>
    </div>

  )
}
export default DynamicGraph;