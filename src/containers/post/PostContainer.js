import React, { Component } from 'react';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  withStyles,
  Paper
} from '@material-ui/core';
import { styles } from './PostContainerStyle';
import { PaginationForm, LoadingForm, BlogPostForm } from 'components';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPosts, getTests } from 'store/actions';

class PostContainer extends Component {
  //   state = {
  //     completed: 0
  //   };

  componentDidMount() {
    const id = '1';
    this.props.getTests(id);
    // this._getPosts();
    // this.timer = setInterval(this._progress, 20);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.posts
    });
  }
  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //   }

  //   _callPostsApi = async () => {
  //     const response = await axios.get(this.props.url);
  //     const posts = response.data.data.docs;
  //     const paginationMeta = response.data.data;
  //     if (posts || paginationMeta) this.setState({ posts, paginationMeta });
  //   };

  // _getPosts = async () => {
  //   const posts = await this.props.getPosts(
  //     'https://training-log-back.herokuapp.com/blog/feed/1/100'
  //   );
  //   return posts;
  // };

  //   _tableHead = () => {
  //     const tableHead = ['AUTHOR', 'TITLE', 'PUBDATE'];
  //     return tableHead;
  //   };

  //   _isPosts = () => {
  //     const { posts } = this.state;
  //     return posts;
  //   };

  //   _progress = () => {
  //     const { completed } = this.state;
  //     this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  //   };

  render() {
    const { isLoading, classes, posts, error } = this.props;
    // const { completed } = this.state;
    return (
      <Paper className={classes.root}>
        {/* <Table>
          <TableHeadForm>{this._tableHead()}</TableHeadForm>
          <TableBody>
            {isLoading ? (
              <LoadingForm completed={completed} classes={classes} />
            ) : (
              <BlogPostForm posts={this._isPost} />
            )}
          </TableBody>
          <PaginationForm />
        </Table> */}
        <div>location {this.props.location && 'true'}</div>
        <div>histroy {this.props.history && 'true'}</div>
        <div>match {this.props.match && 'true'}</div>
        <p />
        <div>isLoading: {isLoading && 'true'}</div>
        <div>posts: {posts && 'true'}</div>
        <div>error: {error && error}</div>
      </Paper>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.test.isLoading,
  posts: state.test.payload,
  error: state.test.error
});

const mapDispatchToProps = dispatch => ({
  getPosts: url => dispatch(getPosts.request(url)),
  getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);

//   export default withRouter(connectModule);

export default withStyles(styles)(connectModule);
