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
import styles from './PlatformContainerStyle';

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
      const people = res.data.data;
      this.setState({ people });
    });
    return response;
  };
  render() {
    const { classes } = this.props;
    const { people, completed } = this.state;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
          </TableHead>
          <TableBody>
            {people ? (
              people.map(person => {
                return (
                  <TableRow>
                    <TableCell key={person._id} value={person.name}>
                      <a href={person.url}>{person.name}</a>
                    </TableCell>
                    <TableCell>{person.desc}</TableCell>
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
