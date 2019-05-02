import React from 'react';
import { TableRow, TableCell, CircularProgress } from '@material-ui/core';

const LoadingForm = ({ completed, classes }) => {
  return (
    <TableRow>
      <TableCell align="center">
        <CircularProgress className={classes.progress} value={completed} />
      </TableCell>
    </TableRow>
  );
};

export default LoadingForm;
