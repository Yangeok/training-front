import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { PaginationForm } from 'components';

const YoutubeListForm = ({ lists }) => {
  return (
    <>
      {lists &&
        lists.map(list => {
          return (
            <TableRow>
              <TableCell key={list.name}>
                <a href={list.url}>{list.name}</a>
              </TableCell>
              <TableCell>{list.desc}</TableCell>
            </TableRow>
          );
        })}
      <PaginationForm />
    </>
  );
};

export default YoutubeListForm;
