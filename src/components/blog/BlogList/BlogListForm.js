import React from 'react';
import { ListContainer } from '../../../containers';

const i = {
  url: '/blog/1/100',
  tableHead: ['NAME', 'DESCRIPTION']
};

const BlogListForm = () => {
  return (
    <>
      <h1>BlogList</h1>
      <ListContainer url={i.url} tableHead={i.tableHead} />
    </>
  );
};

export default BlogListForm;
