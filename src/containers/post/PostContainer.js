import React, { Component } from 'react';
import { TableBody, withStyles, Table, Paper } from '@material-ui/core';
import { styles } from './PostContainerStyle';
import {
  LoadingForm,
  BlogPostForm,
  TableHeadForm,
  PaginationForm
} from 'components';
import { connect } from 'react-redux';
import { getPosts } from 'store/actions';

class PostContainer extends Component {
  state = {
    completed: 0,
    pageId: 1
  };

  componentDidMount() {
    this._getPlatformPosts();
    this.timer = setInterval(this._progress, 20);
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _setPageId = () => {
    const { id } = this.props.match.params;
    this.setState({ pageId: id });
  };

  _getPlatformPosts = () => {
    const { getPosts, location } = this.props;
    const platform = location.pathname.split('/')[1];
    const id = location.pathname.split('/')[3] !== ':id' ;

    const isId = id !== ':id' ? id : 1;

    if (platform.indexOf('blog') !== -1) {
      getPosts(`blog/post/${isId}/20`);
    } else {
      getPosts(`youtube/post/${isId}/20`);
    }
  };

  _pageOnClick = id => {
    const { history, location } = this.props;
    const platform = location.pathname.split('/')[1];

    const isId = id !== ':id' ? id : 1;

    if (platform.indexOf('blog') !== -1) {
      history.push(`/blog/post/${isId}/20`);
    } else {
      history.push(`/youtube/post/${isId}/20`);
    }
  };

  _tableHead = () => {
    return ['AUTHOR', 'TITLE', 'PUBDATE'];
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, posts, id } = this.props;
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
        </Table>
        <PaginationForm
          id={id}
          onClick={this._pageOnClick}
          getPosts={this._getPlatformPosts}
        />
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
  getPosts: url => dispatch(getPosts.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);

export default withStyles(styles)(connectModule);
