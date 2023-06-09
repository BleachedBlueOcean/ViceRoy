import React from 'react';
import { ListItem, Divider, Typography, Tooltip } from '@mui/material';
import { formatDistanceToNow, parseISO } from "date-fns";

const  NewsEntry = ( {article} ) => {
  const date = parseISO(article.published_at);
  const timestamp = formatDistanceToNow(date, {addSuffix: true});

  // const style = {
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   p: 1,
  //   m: 1,
  //   bgcolor: 'background.paper',
  //   borderRadius: 1,
  // }
  return (
      <ListItem >
        <Typography sx={{
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'flex-end',
        }}>
          <span style={{color: 'black', marginRight: '5px', fontSize: '10px'}}>{timestamp}</span>
          {/* <span style={{color: 'black'}} onClick={()=>{console.log(article)}}>4h ago</span> */}
          <span>
            <Tooltip title={article.title}>
              <a href={article.url} style={{fontSize: '10pt'}}>{`${article.title.substring(0, 30)}...`}</a>
            </Tooltip>
          </span>
        </Typography>
      </ListItem>
  );
};

export default NewsEntry;