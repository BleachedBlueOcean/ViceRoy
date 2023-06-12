import React, { useState } from 'react';
import LineChart from './Graph.jsx';
import News from './News.jsx';
import NewsList from './NewsList.jsx';
function Trading(){


    return(
        <>
        <div>YO</div>
        <LineChart coin={'bitcoin'} interval={'d1'}/>
        <News/>
        {/* <NewsList/> */}
        </>
    )

}

export default Trading;