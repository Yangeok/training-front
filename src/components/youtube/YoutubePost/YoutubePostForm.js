import React from 'react';
import { ListContainer } from 'containers';

const i = {
  url: '/youtube/feed/1/100',
  tableHead: ['AUTHOR', 'TITLE', 'PUBDATE']
};

const YoutubePostForm = () => {
  return (
    <>
      <h1>YoutubePost</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
    </>
  );
};

export default YoutubePostForm;
