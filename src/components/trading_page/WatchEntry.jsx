import React, {useState, useEffect} from 'react';
import LineChart from './LineGraph.jsx';
function WatchEntry ({coinname}) {

  return (
    <div style={{width: '100%', height: '400px', display: 'flex', flexDirection: 'row'}}>
      <div style={{marginLeft: '10%', marginTop: 'auto', marginBottom: 'auto'}}>{coinname}</div>
      <div style={{marginLeft: '25%', width: '300px', height: '100%', float: 'right'}}>
        <LineChart coin={coinname} interval={'day'}/>
      </div>
    </div>
  )
}

export default WatchEntry