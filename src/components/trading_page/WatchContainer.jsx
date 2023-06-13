import React, {useState, useEffect} from 'react';
import LeftColTemp from '../containerTemplates/LeftColTemp.jsx';
import WatchList from './WatchList.jsx';

function WatchContainer () {

  return (
    <LeftColTemp props={<WatchList/>}>

    </LeftColTemp>
  )
}

export default WatchContainer