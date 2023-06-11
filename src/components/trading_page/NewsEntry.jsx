import React from 'react';

function NewsEntry ( {article} ) {

  return (
    <div>
      <a href={article.url}>{article.title}</a>
    </div>
  )
}

export default NewsEntry