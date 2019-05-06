import React from 'react';
import { Table, Paper } from '@material-ui/core';

const TableTemplateForm = ({ children, classes }) => {
  return (
    <Paper className={classes}>
      <Table>{children}</Table>
    </Paper>
  );
};

export default TableTemplateForm;
