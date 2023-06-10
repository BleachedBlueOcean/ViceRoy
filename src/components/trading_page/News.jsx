import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsEntry from './NewsEntry.jsx'
function News () {

  const [articles, setArticles] = useState([])
  const getNews = () => {
    // return fetch('https://cryptopanic.com/api/v1/posts/?auth_token=eacbe41187c73aa0ba4a806774a1f04cac9341d8&kind=news&filter=hot&public=true', {method: 'get', mode: 'cors', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'}})
    //   // .then((resp) => resp.json())
    //   .then((result) => {console.log('result :', result)})
    //   .catch((err) => {console.log('fetch error: ', err)})

    // return axios('https://cryptopanic.com/api/v1/posts/?auth_token=eacbe41187c73aa0ba4a806774a1f04cac9341d8&kind=news&filter=hot&public=true')
    //   .then((result) => {console.log('result :', result)})
    //   .catch((err) => {console.log('fetch error: ', err)})

  }

  useEffect(()=>{getNews();}, [])

  return (
    <div className='newslist'>
      {articles.map((article) => <NewsEntry article={article} key={article.title}/>)}
    </div>
  )
}

export default News