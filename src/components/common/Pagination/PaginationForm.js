import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

const PaginationForm = ({ id, onClick, total }) => {
  const offset = (id - 1) * 20;
  return (
    <MuiThemeProvider theme={theme}>
      <Pagination
        limit={20}
        offset={offset}
        total={total}
        onClick={(e, offset) => {
          onClick(offset / 20 + 1);
        }}
        currentPageColor={'inherit'}
        nextPageLabel={'>>'}
        previousPageLabel={'<<'}
        size={'large'}
      />
    </MuiThemeProvider>
  );
};

export default PaginationForm;
