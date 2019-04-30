import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

class Pages extends Component {
  state = {
    offset: 0
  };

  _handleClick(offset) {
    this.setState({ offset });
  }

  _clickPage(id) {
    this.props.history = `/${id}/100`;
  }

  render() {
    const { offset } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={offset}
          total={1000}
          onClick={(e, offset) => [
            this._handleClick(offset),
            this._clickPage('10')
          ]}
        />
      </MuiThemeProvider>
    );
  }
}

export default Pages;
