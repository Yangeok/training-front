import React, { Component } from 'react';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  CircularProgress,
  withStyles,
  Paper
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class TableTemplate extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { people, classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>URL</TableCell>
          </TableHead>
          {/* <CircularProgress
            className={classes.progress}
            variant="determinate"
            value={this.state.completed}
          /> */}
          <TableBody>
            {people ? (
              people.map(person => {
                return (
                  <TableRow>
                    <TableCell key={person.id}>{person.name}</TableCell>
                    <TableCell>{person.desc}</TableCell>
                    <TableCell>
                      <a href={person.url}>{person.url}</a>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                {/* <TableCell align="center"> */}
                <CircularProgress
                  className={classes.progress}
                  variant="determinate"
                  value={this.state.completed}
                />
                {/* </TableCell> */}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableTemplate);
