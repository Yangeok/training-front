import React, { Component } from 'react';
import {
  TableBody,
  TableHead,
  withStyles,
  Table,
  TableFooter
} from '@material-ui/core';
import { styles } from './PostContainerStyle';
import {
  LoadingForm,
  PostForm,
  TableHeadForm,
  PaginationForm
} from 'components';
import { connect } from 'react-redux';
import { getPosts } from 'store/actions';

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

  _getPlatformPosts = async () => {
    const { getPosts, match, history } = this.props;
    const platform = match.url.split('/')[1];
    let { id } = match.params;

    const isId = typeof id !== Number;
    if (isId) {
      id = 1;
      history.push(`/${platform}/post/1/15`);
    }

    getPosts(`${platform}/post/${id}/15`);
  };

  _pageOnClick = id => {
    const { getPosts, location, history } = this.props;
    const platform = location.pathname.split('/')[1];

    history.push(`/${platform}/post/${id}/15`);
    getPosts(`${platform}/post/${id}/15`);
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
      <div className={classes.divContent}>
        <Table>
          <TableHead>
            <TableHeadForm
              table={classes.tableHead}
              heads={this._tableHead()}
            />
          </TableHead>
          <TableBody>
            {isLoading ? (
              <LoadingForm completed={completed} progress={classes.progress} />
            ) : (
              <PostForm table={classes.tableCell} posts={posts} />
            )}
          </TableBody>
          <TableFooter />
        </Table>
        <PaginationForm
          pagination={classes.pagination}
          id={id}
          total={total}
          onClick={this._pageOnClick}
        />
      </div>
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
