import React, { Component } from 'react';
import { TableBody, withStyles, Table, Paper } from '@material-ui/core';
import { styles } from './ListContainerStyle';
import { LoadingForm, BlogListForm, TableHeadForm } from 'components';
import { connect } from 'react-redux';
import { getLists } from 'store/actions';

class ListContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.props.getLists(1);
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _tableHead = () => {
    const tableHead = ['AUTHOR', 'DESCRIPTION'];
    return tableHead;
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, lists } = this.props;
    const { completed } = this.state;
    console.log(this.props.history);
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHeadForm heads={this._tableHead()} />
          <TableBody>
            {isLoading ? (
              <LoadingForm completed={completed} classes={classes} />
            ) : (
              <BlogListForm lists={lists} />
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.list.isLoading,
  lists: state.list.payload,
  error: state.post.error
});

const mapDispatchToProps = dispatch => ({
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default withStyles(styles)(connectModule);
