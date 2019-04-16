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
import axios from 'axios';

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
    people: [],
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  callApi = async () => {
    const response = await axios.get(this.props.url).then(res => {
      const people = res.data;
      this.setState({ people });
    });
    return response;
  };
  render() {
    const { classes } = this.props;
    const { people, completed } = this.state;
    return (
      <Paper className={classes.root}>
        <div>state {completed}</div>
        <Table>
          <TableHead>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>URL</TableCell>
          </TableHead>
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
                <TableCell align="center">
                  <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    value={completed}
                  />
                </TableCell>
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
