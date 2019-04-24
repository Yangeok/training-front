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
import { styles } from './ListContainerStyle';

class ListContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this._progress, 20);
    if (this.props.url.indexOf('feed') !== -1) {
      this._callFeedApi();
    }

    this._callListApi();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  _progressBar = () => {
    const { classes } = this.props;
    const { completed } = this.state;
    return (
      <TableRow>
        <TableCell align="center">
          <CircularProgress
            className={classes.progress}
            variant="determinate"
            value={completed}
          />
        </TableCell>
      </TableRow>
    );
  };

  _callListApi = async () => {
    const response = await axios.get(this.props.url);
    const people = response.data.data;
    if (people) this.setState({ people });
  };

  _callFeedApi = async () => {
    const response = await axios.get(this.props.url);
    const feeds = response.data.data.docs;
    const paginationMeta = response.data.data;
    if (feeds || paginationMeta) this.setState({ feeds, paginationMeta });
  };

  _isLists = () => {
    const { people } = this.state;
    return people
      ? people.map(person => {
          return (
            <TableRow>
              <TableCell key={person._id} value={person.name}>
                <a href={person.url}>{person.name}</a>
              </TableCell>
              <TableCell>{person.desc}</TableCell>
            </TableRow>
          );
        })
      : this._progressBar();
  };

  _isFeeds = () => {
    const { feeds } = this.state;
    return feeds
      ? feeds.map(feed => {
          return (
            <TableRow>
              <TableCell key={feed.title}>{feed.creator}</TableCell>
              <TableCell>
                <a href={feed.link}>{feed.title}</a>
                <p />
                <div>{feed.contentSnippet}</div>
              </TableCell>
              <TableCell>{feed.pubDate.substring(0, 10)}</TableCell>
            </TableRow>
          );
        })
      : this._progressBar();
  };

  _isHead = () => {
    const { tableHead } = this.props;
    return (
      tableHead &&
      tableHead.map(head => {
        return <TableCell>{head}</TableCell>;
      })
    );
  };

  render() {
    const { classes } = this.props;
    const { feeds } = this.state;
    return (
      <Paper className={classes.root}>
        {/* <div>totalDocs: {paginationMeta.totalDocs}</div>
        <div>limit: {paginationMeta.limit}</div>
        <div>page: {paginationMeta.page}</div>
        <div>totalPages: {paginationMeta.totalPages}</div>
        <div>pagingCounter: {paginationMeta.pagingCounter}</div>
        <div>hasPrevPage: {paginationMeta.hasPrevPage}</div>
        <div>hasNextPage: {paginationMeta.hasNextPage}</div>
        <div>prevPage: {paginationMeta.prevPage}</div>
        <div>nextPage: {paginationMeta.nextPage}</div> */}
        <Table>
          <TableHead>{this._isHead()}</TableHead>
          <TableBody>{feeds ? this._isFeeds() : this._isLists()}</TableBody>
        </Table>
      </Paper>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHead: PropTypes.array.isRequired
};

export default withStyles(styles)(ListContainer);
