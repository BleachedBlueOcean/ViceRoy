import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';
import { Box, List, Divider, Typography } from '@mui/material';

const NewsList = ({watched}) => {

  const [articles, setArticles] = useState([])
  const getNews = () => {

      return axios(`http://127.0.0.1:5173/api/?auth_token=${import.meta.env.VITE_NEWS_API}&kind=news&filter=hot&public=true&currencies=${watched.map((coin) => coin[0]).join()}`)
      .then((result) => {setArticles(result.data.results)})
      .catch((err) => {console.log('fetch error: ', err)})

  };

  useEffect(()=>{ getNews(); }, [watched]);

  const style = {
    width: '86%',
    bgcolor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '24px',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '10px'
  };

  return (
    <>
      <Typography variant='h5' sx={{ mb: '-1rem' }}>News</Typography>
      <Box className='newslist' sx={{
        height: '10rem',
        overflowY: 'auto',
        borderRadius: '10px',
        backgroundColor: '#13C4A3',
        '&::-webkit-scrollbar': {
          width: '8px',
          background: 'lightgray',
          borderRadius: '0 10px 10px 0',
          backgroundColor: '#13C4A3'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
        }
      }}>
        <List sx={style}>
          {articles.map((article) =>
            <div style={{borderBottom: 'solid gray', width: '100%'}}key={article.title}>
                <NewsEntry article={article}/>
            </div>
          )}
        </List>
      </Box>
    </>
  );
};

export default NewsList;