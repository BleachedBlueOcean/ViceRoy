import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';
import { List, Divider } from '@mui/material';

function News () {

  const [articles, setArticles] = useState([])
  const [coin, setCoin] = useState('')

  const getNews = () => {

      return axios(`http://127.0.0.1:5173/api/?auth_token=${import.meta.env.VITE_NEWS_API}&kind=news&filter=hot&public=true&currencies=${coin}`)
      .then((result) => {console.log('result :', result.data.results); setArticles(result.data.results)})
      .catch((err) => {console.log('fetch error: ', err)})

  }

  useEffect(()=>{getNews();}, [])

  const style = {
    width: '100%',
    bgcolor: '#9e9e9e',
  };

  return (
    <div className='newslist'>
      <List sx={style}>
        {articles.map((article) =>
          <div key={article.title}>
            <Divider>
              <NewsEntry article={article}/>
            </Divider>
          </div>
        )}
      </List>
    </div>
    // <div className='newslist'>
    //   {articles.map((article) => <NewsEntry article={article} key={article.title}/>)}
    // </div>
  )
}

export default News