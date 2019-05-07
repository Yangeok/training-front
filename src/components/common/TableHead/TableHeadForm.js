import React from 'react';
import { TableCell } from '@material-ui/core';

const TableHeadForm = ({ heads }) => {
  return (
    <>
      {heads.map(head => {
        return <TableCell key={head}>{head}</TableCell>;
      })}
    </>
  );
};

export default TableHeadForm;
