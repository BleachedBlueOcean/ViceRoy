import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx';

function News () {

  const [articles, setArticles] = useState([])
  const [coin, setCoin] = useState('')

  const getNews = () => {

      return axios(`http://127.0.0.1:5173/api/?auth_token=${import.meta.env.VITE_NEWS_API}&kind=news&filter=hot&public=true&currencies=${coin}`)
      .then((result) => {console.log('result :', result.data.results); setArticles(result.data.results)})
      .catch((err) => {console.log('fetch error: ', err)})

  }

  useEffect(()=>{getNews();}, [])

  return (
    <div className='newslist'>
      {articles.map((article) => <NewsEntry article={article} key={article.title}/>)}
    </div>
  )
}

export default News