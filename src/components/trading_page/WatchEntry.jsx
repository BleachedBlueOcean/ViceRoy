import React, {useState, useEffect} from 'react';
import LineChart from './LineGraph.jsx';
function WatchEntry ({coinname, setDynamicCoin}) {

  return (
    <div style={{display: 'flex', flexDirection: 'row', margin: 'auto'}}>
      <div style={{marginLeft: '10%', marginTop: 'auto', marginBottom: 'auto', width: '50%'}} onClick={()=>{setDynamicCoin(coinname)}}>{coinname}</div>
      <div style={{margin: 'auto', width: '50%', height: '100%', float: 'right'}}>
        <div style={{margin: '10%'}}>
          <LineChart coin={coinname} height={'200px'} interval={'day'}/>
        </div>
      </div>
    </div>
  )
}

export default WatchEntry