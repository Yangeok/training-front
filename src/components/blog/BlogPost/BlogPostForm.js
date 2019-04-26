import React from 'react';
import { ListContainer } from 'containers';

const i = {
  url: '/blog/feed/1/100',
  tableHead: ['AUTHOR', 'TITLE', 'PUBDATE']
};

const BlogPostForm = props => {
  return (
    <>
      <h1>BlogPost</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
    </>
  );
};

export default BlogPostForm;
