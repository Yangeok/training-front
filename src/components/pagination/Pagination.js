import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

class Page extends Component {
  state = {
    offset: 0
  };

  handleClick(offset) {
    this.setState({ offset });
  }

  render() {
    const { offset } = this.state;
    const handleClick = this;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={offset}
          total={100}
          onClick={(e, offset) => handleClick(offset)}
        />
      </MuiThemeProvider>
    );
  }
}

export default Page;
