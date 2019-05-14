import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const BlogPostForm = ({ posts, tableCell, tableRow }) => {
  return (
    <>
      {posts &&
        posts.map(post => {
          return (
            <TableRow tableRow={tableRow}>
              <TableCell
                data-label="AUTHOR"
                className={tableCell}
                key={post.title}>
                {post.creator}
              </TableCell>
              <TableCell data-label="TITLE" className={tableCell}>
                <a href={post.link}>{post.title}</a>
              </TableCell>
              <TableCell data-label="DATE" className={tableCell}>
                {post.pubDate.substring(0, 10)}
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default BlogPostForm;
