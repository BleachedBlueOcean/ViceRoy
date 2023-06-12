import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';
import { List, Divider } from '@mui/material';
import LeftColTemp from '../containerTemplates/LeftColTemp.jsx'
import NewsList from './NewsList.jsx';

function News () {

  return (
    <LeftColTemp props={<NewsList/>}>

    </LeftColTemp>
  )
}

export default News