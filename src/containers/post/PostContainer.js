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
import './PostContainer.css';

class PostContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this._getPlatformPosts();
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _getPlatformPosts = () => {
    const { getPosts, location, history } = this.props;
    const platform = location.pathname.split('/')[1];
    const id = location.pathname.split('/')[3];

    const isId = id === ':id' ? history.push(`/${platform}/post/1/20`) : id;
    getPosts(`${platform}/post/${isId}/20`);
  };

  _pageOnClick = id => {
    const { getPosts, location, history } = this.props;
    const platform = location.pathname.split('/')[1];

    history.push(`/${platform}/post/${id}/20`);
    getPosts(`${platform}/post/${id}/20`);
  };

  _tableHead = () => {
    return ['AUTHOR', 'TITLE', 'DATE'];
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, posts, id, total } = this.props;
    const { completed } = this.state;
    return (
      <>
        <Paper className={classes.root}>
          <Table>
            <TableHeadForm
              className={classes.table}
              heads={this._tableHead()}
            />
            <TableBody>
              {isLoading ? (
                <LoadingForm
                  completed={completed}
                  progress={classes.progress}
                />
              ) : (
                <BlogPostForm posts={posts} />
              )}
            </TableBody>
          </Table>
          <PaginationForm id={id} total={total} onClick={this._pageOnClick} />
        </Paper>
      </>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.post.isLoading,
  posts: state.post.payload,
  total: state.post.pageMeta,
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
