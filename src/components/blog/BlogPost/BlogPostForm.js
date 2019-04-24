import React from 'react';
import { ListContainer, PagingContainer } from 'containers';

const i = {
  url: '/blog/feed/1/100',
  tableHead: ['AUTHOR', 'TITLE', 'PUBDATE']
};

const BlogPostForm = () => {
  return (
    <>
      <h1>BlogPost</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
      <PagingContainer />
    </>
  );
};

export default BlogPostForm;
