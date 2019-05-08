import React, { Component } from 'react';
import { TableBody, withStyles, Table, Paper } from '@material-ui/core';
import { styles } from './PostContainerStyle';
import { LoadingForm, BlogPostForm, TableHeadForm } from 'components';
import { connect } from 'react-redux';
import { getPosts } from 'store/actions';

class PostContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.props.getPosts(1);
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _tableHead = () => {
    return ['AUTHOR', 'TITLE', 'PUBDATE'];
  };

  _isBlog = () => {
    const url = window.location.href;
    if (url.indexOf('blog') !== -1) {
      this.props.getPosts(1);
    }
  };

  _is;

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
              <BlogPostForm posts={posts} id={id} />
            )}
          </TableBody>
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
  getPosts: url => dispatch(getPosts.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);

export default withStyles(styles)(connectModule);
