import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const ListForm = ({ lists, table }) => {
  return (
    <>
      {lists &&
        lists.map(list => {
          return (
            <TableRow>
              <TableCell
                data-label="AUTHOR"
                className="table-cell"
                key={list.name}>
                <a href={list.url} target="_blank" rel="noopener noreferrer">
                  {list.name}
                </a>
              </TableCell>
              <TableCell data-label="DESCRIPTION" className="table-cell">
                {list.desc}
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export default ListForm;
