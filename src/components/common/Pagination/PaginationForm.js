import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

const PaginationForm = ({ id, onClick, total, pagination }) => {
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
        outerButtonCount={1}
        innerButtonCount={1}
        className={pagination}
      />
    </MuiThemeProvider>
  );
};

export default PaginationForm;
