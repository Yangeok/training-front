import React, { Component } from 'react';
import { Table, TableBody, withStyles, Paper } from '@material-ui/core';
import { styles } from './PostContainerStyle';
import {
  PaginationForm,
  LoadingForm,
  BlogPostForm,
  TableHeadForm
} from 'components';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPosts, getTests } from 'store/actions';

class PostContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.props.getPosts();
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _getPosts = async () => {
    const posts = await this.props.getPosts(
      'https://training-log-back.herokuapp.com/blog/feed/1/100'
    );
    return posts;
  };

  _tableHead = () => {
    const tableHead = ['AUTHOR', 'TITLE', 'PUBDATE'];
    return tableHead;
  };

  _isPosts = () => {
    const { posts } = this.state;
    return posts;
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, posts } = this.props;
    const { completed } = this.state;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHeadForm heads={this._tableHead()} />
          <TableBody>
            {isLoading ? (
              <LoadingForm completed={completed} classes={classes} />
            ) : (
              <BlogPostForm posts={posts} />
            )}
          </TableBody>
          <PaginationForm />
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.post.isLoading,
  posts: state.post.payload,
  error: state.post.error
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts.request('1'))
  // getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);

export default withStyles(styles)(connectModule);
