import React, { useState } from 'react';
import LineChart from './LineGraph.jsx';
import CandleChart from './CandleGraph.jsx'
import News from './News.jsx';
import NewsList from './NewsList.jsx';
function Trading(){


    return(
        <>
        {/* <LineChart coin={'bitcoin'} interval={'d1'}/> */}
        <CandleChart coin={'bitcoin'} interval={'d1'}/>
        <News/>
        {/* <NewsList/> */}
        </>
    )

}

export default Trading;