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
import { styles } from './ListContainerStyle';
import { PaginationForm, LoadingForm, BlogListForm } from 'components';
import axios from 'axios';
import { connect } from 'react-redux';
import { getLists } from 'store/actions';

class ListContainer extends Component {
  state = {
    completed: 0
  };

  // componentDidMount() {
  //   this.timer = setInterval(this._progress, 20);
  //   this._callListsApi();
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _callListsApi = async () => {
    const response = await axios.get(this.props.url);
    const people = response.data.data;
    if (people) this.setState({ people });
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

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
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
          <TableBody>{!this.props.isLoading && this._isLists()}</TableBody>
        </Table>
        <PaginationForm callLists={this._callListsApi} url={this.props.url} />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.list.isLoading
});

const mapDispatchToProps = dispatch => ({
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

//   export default withRouter(connectModule);

export default withStyles(styles)(connectModule);
