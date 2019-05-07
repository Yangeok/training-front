import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { PaginationForm } from 'components';

const BlogPostForm = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map(post => {
          return (
            <TableRow>
              <TableCell key={post.title}>{post.creator}</TableCell>
              <TableCell>
                <a href={post.link}>{post.title}</a>
                <p />
                <div>{post.contentSnippet}</div>
              </TableCell>
              <TableCell>{post.pubDate.substring(0, 10)}</TableCell>
            </TableRow>
          );
        })}
      <PaginationForm />
    </>
  );
};

export default BlogPostForm;
