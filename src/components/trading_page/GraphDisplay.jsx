import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx';
import GraphNavTemp from '../containerTemplates/GraphNavTemp.jsx';

function GraphDisplay() {
  const [coin, setCoin] = useState('bitcoin')
  const [interval, setInterval] = useState('d1')
  const [view, setView] = useState('candle')
  return(
    <div>
      <GraphNavTemp interval={interval} setInterval={setInterval} coin={coin} setCoin={setCoin}/>
      {view === 'candle' && <CandleChart interval={interval} coin={coin} />}
    </div>

  )
}
export default GraphDisplay;