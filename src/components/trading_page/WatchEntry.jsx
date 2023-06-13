import React, {useState, useEffect} from 'react';
import LineChart from './LineGraph.jsx';
function WatchEntry ({coinname}) {

  return (
    <div>
      <span>{coinname}</span>
      <span style={{marginLeft: '10px'}}>
        {'Graph'}
        {/* <LineChart coin={coinname} interval={'d1'}/> */}
      </span>
    </div>
  )
}

export default WatchEntry