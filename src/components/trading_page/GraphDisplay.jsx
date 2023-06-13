import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx';
import GraphNavTemp from '../containerTemplates/GraphNavTemp.jsx';

function GraphDisplay({coinOptions}) {
  const [coin, setCoin] = useState('BTC')
  const [interval, setInterval] = useState('day')
  const [view, setView] = useState('line')
  return(
    <div>
      <GraphNavTemp coinOptions={coinOptions} interval={interval} setInterval={setInterval} coin={coin} setCoin={setCoin} view ={view} setView={setView} />
      {view === 'candle' && <CandleChart interval={interval} coin={coin} />}
      {view === 'line' && <LineChart interval={interval} coin={coin} />}
    </div>

  )
}
export default GraphDisplay;