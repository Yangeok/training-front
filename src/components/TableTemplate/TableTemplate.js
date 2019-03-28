import React, { Component } from 'react';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  CircularProgress,
  withStyles
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
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>URL</TableCell>
          </TableHead>
          <TableBody>
            {/* <TableRow>
            <TableCell>
              <CircularProgress className={classes.progress} />
            </TableCell>
          </TableRow> */}

            {/* {props.people.map(person => (
            <TableRow>
              <TableCell key={person.id}>{person.name}</TableCell>
              <TableCell>{person.desc}</TableCell>
              <TableCell>
                <a href={person.url}>{person.url}</a>
              </TableCell>
            </TableRow>
          ))} */}

            {people ? (
              people.map(person => (
                <TableRow>
                  <TableCell key={person.id}>{person.name}</TableCell>
                  <TableCell>{person.desc}</TableCell>
                  <TableCell>
                    <a href={person.url}>{person.url}</a>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <CircularProgress className={classes.progress} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TableTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableTemplate);
