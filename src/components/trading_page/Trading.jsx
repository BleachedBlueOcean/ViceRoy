import React, { useState } from 'react';
import GraphDisplay from './GraphDisplay.jsx'
import News from './News.jsx';
import NewsList from './NewsList.jsx';
function Trading(){
    return(
        <>
        {/* <LineChart coin={'bitcoin'} interval={'d1'}/> */}
        <GraphDisplay />
        <News/>
        {/* <NewsList/> */}
        </>
    )

}

export default Trading;