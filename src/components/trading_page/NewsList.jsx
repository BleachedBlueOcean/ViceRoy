import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';
import { List, Divider } from '@mui/material';
import LeftColTemp from '../containerTemplates/LeftColTemp.jsx'

function NewsList () {

  const [articles, setArticles] = useState([])
  const [coin, setCoin] = useState('')

  const getNews = () => {

      return axios(`http://127.0.0.1:5173/api/?auth_token=${import.meta.env.VITE_NEWS_API}&kind=news&filter=hot&public=true&currencies=${coin}`)
      .then((result) => {setArticles(result.data.results)})
      .catch((err) => {console.log('fetch error: ', err)})

  }

  useEffect(()=>{getNews();}, [])

  const style = {
    width: '80%',
    bgcolor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5%',
    borderRadius: '10px'
  };

  return (
      <div className='newslist' style={{height: '600px', overflowY: 'auto', borderRadius: '10px', backgroundColor: '#13C4A3'}}>
        <List sx={style}>
          {articles.map((article) =>
            <div style={{borderBottom: 'solid gray', width: '100%'}}key={article.title}>
              {/* <Divider> */}
                <NewsEntry article={article}/>
              {/* </Divider> */}
            </div>
          )}
        </List>
      </div>
    // <div className='newslist'>
    //   {articles.map((article) => <NewsEntry article={article} key={article.title}/>)}
    // </div>
  )
}

export default NewsList