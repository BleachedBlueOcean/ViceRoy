import React from 'react';
import { ListItem, Divider } from '@mui/material';

function NewsEntry ( {article} ) {

  return (
      <ListItem>
        <>
        <span style={{color: 'black'}} onClick={()=>{console.log(article)}}>4h ago</span>
        <span>
          <a href={article.url}>{article.title}</a>
        </span>
        </>
      </ListItem>
  )
}

export default NewsEntry