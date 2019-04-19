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
import { styles } from './FeedContainerStyle';

class TableTemplate extends Component {
  state = {
    feeds: [],
    paginationMeta: [],
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
      const paginationMeta = res.data.data;
      this.setState({ feeds, paginationMeta });
    });
    return response;
  };
  render() {
    const { classes } = this.props;
    const { feeds, paginationMeta, completed } = this.state;
    return (
      <Paper className={classes.root}>
        <div>totalDocs: {paginationMeta.totalDocs}</div>
        <div>limit: {paginationMeta.limit}</div>
        <div>page: {paginationMeta.page}</div>
        <div>totalPages: {paginationMeta.totalPages}</div>
        <div>pagingCounter: {paginationMeta.pagingCounter}</div>
        <div>hasPrevPage: {paginationMeta.hasPrevPage}</div>
        <div>hasNextPage: {paginationMeta.hasNextPage}</div>
        <div>prevPage: {paginationMeta.prevPage}</div>
        <div>nextPage: {paginationMeta.nextPage}</div>
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
                    <TableCell key={feed._id}>{feed.creator}</TableCell>
                    <TableCell>
                      <a href={feed.link}>{feed.title}</a>
                      <p />
                      <div>{feed.contentSnippet}</div>
                    </TableCell>
                    <TableCell>{feed.pubDate.substring(0, 10)}</TableCell>
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
