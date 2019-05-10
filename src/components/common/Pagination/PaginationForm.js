import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

const PaginationForm = ({ id, onClick, getPosts }) => {
  const offset = (id - 1) * 20;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Pagination
        limit={20}
        offset={offset}
        total={200}
        onClick={(e, offset) => {
          onClick(offset / 20 + 1);
          getPosts();
        }}
      />
    </MuiThemeProvider>
  );
};

export default PaginationForm;
