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
    feeds: [],
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
      const feeds = res.data.data.docs;
      this.setState({ feeds });
    });
    return response;
  };
  render() {
    const { classes } = this.props;
    const { feeds, completed } = this.state;
    return (
      <Paper className={classes.root}>
        <div>state {completed}</div>
        <Table>
          <TableHead>
            <TableCell>AUTHOR</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>PUBDATE</TableCell>
          </TableHead>
          <TableBody>
            {feeds ? (
              feeds.map(feed => {
                return (
                  <TableRow>
                    <TableCell key={feed.id}>{feed.creator}</TableCell>
                    <TableCell>
                      <a href={feed.link}>{feed.title}</a>
                      <div>{feed.contentSnippet}</div>
                    </TableCell>
                    <TableCell>
                      {feed.pubDate.replace('T', ' ').replace('.000Z', '')}
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
