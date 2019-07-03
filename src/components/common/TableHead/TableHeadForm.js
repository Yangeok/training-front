import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

const TableHeadForm = ({ heads, table }) => {
  return (
    <TableRow>
      {heads.map(head => {
        return (
          <TableCell className="table-head" key={head}>
            {head}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableHeadForm;
