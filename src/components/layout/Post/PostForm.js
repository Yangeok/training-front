import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const PostForm = ({ posts, table }) => {
  return (
    <>
      {posts &&
        posts.map(post => {
          return (
            <TableRow>
              <TableCell
                data-label="AUTHOR"
                className="table-cell"
                key={post.title}>
                {post.creator}
              </TableCell>
              <TableCell data-label="TITLE" className="table-cell">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </TableCell>
              <TableCell data-label="DATE" className="table-cell">
                {post.pubDate.substring(0, 10)}
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default PostForm;
