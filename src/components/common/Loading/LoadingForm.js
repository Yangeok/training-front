import React from 'react';
import { TableRow, TableCell, CircularProgress } from '@material-ui/core';

const LoadingForm = ({ completed, progress }) => {
  return (
    <TableRow>
      <TableCell align="center">
        <CircularProgress className={progress} value={completed} />
      </TableCell>
    </TableRow>
  );
};

export default LoadingForm;
