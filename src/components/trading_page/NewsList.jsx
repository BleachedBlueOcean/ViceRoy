import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';
import { Box, List, Divider } from '@mui/material';

function NewsList ({watched}) {

  const [articles, setArticles] = useState([])
  const getNews = () => {

      return axios(`http://127.0.0.1:5173/api/?auth_token=${import.meta.env.VITE_NEWS_API}&kind=news&filter=hot&public=true&currencies=${watched.map((coin) => coin[0]).join()}`)
      .then((result) => {setArticles(result.data.results)})
      .catch((err) => {console.log('fetch error: ', err)})

  }

  useEffect(()=>{getNews();}, [watched])

  const style = {
    width: '80%',
    bgcolor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5%',
    borderRadius: '10px'
  };

  return (
      <Box className='newslist' sx={{
        height: '600px',
        overflowY: 'auto',
        borderRadius: '10px',
        backgroundColor: '#13C4A3'
      }}>
        <List sx={style}>
          {articles.map((article) =>
            <div style={{borderBottom: 'solid gray', width: '100%'}}key={article.title}>
                <NewsEntry article={article}/>
            </div>
          )}
        </List>
      </Box>
  )
}

export default NewsList