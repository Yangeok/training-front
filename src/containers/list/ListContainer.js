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
import axios from 'axios';
import { styles } from './ListContainerStyle';
import { PaginationForm, LoadingForm, BlogListForm } from 'components';
import { getLists, getPosts } from 'store/actions';

class ListContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this._progress, 20);
    if (this.props.url.indexOf('post') !== -1) {
      this._callPostsApi();
    }
    this._callListsApi();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  _callListsApi = async () => {
    const response = await axios.get(this.props.url);
    const people = response.data.data;
    if (people) this.setState({ people });
  };

  _callPostsApi = async () => {
    const response = await axios.get(this.props.url);
    const posts = response.data.data.docs;
    const paginationMeta = response.data.data;
    if (posts || paginationMeta) this.setState({ posts, paginationMeta });
  };

  _isLists = () => {
    const { people } = this.state;
    return people ? (
      people.map(person => {
        return (
          <TableRow>
            <TableCell key={person._id} value={person.name}>
              <a href={person.url}>{person.name}</a>
            </TableCell>
            <TableCell>{person.desc}</TableCell>
          </TableRow>
        );
      })
    ) : (
      <LoadingForm
        completed={this.state.completed}
        classes={this.props.classes}
      />
    );
  };

  _isPosts = () => {
    const { posts } = this.state;
    return posts ? (
      posts.map(post => {
        return (
          <TableRow>
            <TableCell key={post.title}>{post.creator}</TableCell>
            <TableCell>
              <a href={post.link}>{post.title}</a>
              <p />
              <div>{post.contentSnippet}</div>
            </TableCell>
            <TableCell>{post.pubDate.substring(0, 10)}</TableCell>
          </TableRow>
        );
      })
    ) : (
      <LoadingForm
        completed={this.state.completed}
        classes={this.props.classes}
      />
    );
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
    return (
      <Paper className={this.props.classes.root}>
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
          <TableBody>
            {this.state.posts ? this._isPosts() : this._isLists()}
          </TableBody>
        </Table>
        <PaginationForm
          callLists={this._callListsApi}
          callPosts={this._callPostsApi}
          url={this.props.url}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(ListContainer);
