import React from 'react';
import { ListContainer } from 'containers';

const i = {
  url: '/youtube/1/100',
  tableHead: ['NAME', 'DESCRIPTION']
};

const YoutubeListForm = () => {
  return (
    <>
      <h1>YoutubeList</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
    </>
  );
};

export default YoutubeListForm;
