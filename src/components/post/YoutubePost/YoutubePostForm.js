import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { PaginationForm } from 'components';

const YoutubePostForm = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map(post => {
          return (
            <TableRow>
              <TableCell key={post.title}>{post.creator}</TableCell>
              <TableCell>
                <a href={post.link}>{post.title}</a>
              </TableCell>
              <TableCell>{post.pubDate.substring(0, 10)}</TableCell>
            </TableRow>
          );
        })}
      <PaginationForm />
    </>
  );
};

export default YoutubePostForm;
