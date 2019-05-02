import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

class PaginationForm extends Component {
  state = {
    offset: 0
  };

  _handleClick = offset => {
    this.setState({ offset });
  };

  render() {
    const { offset } = this.state;
    const { isLoading } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={offset}
          total={1000}
          onClick={(e, offset) => this._handleClick(offset)}
        />
      </MuiThemeProvider>
    );
  }
}

export default PaginationForm;
