import React from 'react';
import { ListItem, Divider } from '@mui/material';

function NewsEntry ( {article} ) {

  return (
      <ListItem>
        <div>
          <a href={article.url}>{article.title}</a>
        </div>
      </ListItem>
  )
}

export default NewsEntry