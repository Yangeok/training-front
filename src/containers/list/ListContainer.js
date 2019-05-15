import React, { Component } from 'react';
import { TableBody, withStyles, Table, TableHead } from '@material-ui/core';
import { styles } from './ListContainerStyle';
import { LoadingForm, ListForm, TableHeadForm } from 'components';
import { connect } from 'react-redux';
import { getLists } from 'store/actions';

class ListContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this._getPlatformLists();
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _getPlatformLists = () => {
    const { getLists, location, history } = this.props;
    const platform = location.pathname.split('/')[1];
    const id = location.pathname.split('/')[2];

    const isId = id === ':id' ? history.push(`/${platform}/1/1`) : 1;
    getLists(`${platform}/${isId}/1`);
  };

  _tableHead = () => {
    return ['AUTHOR', 'DESCRIPTION'];
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, lists } = this.props;
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
              <LoadingForm completed={completed} classes={classes} />
            ) : (
              <ListForm table={classes.tableCell} lists={lists} />
            )}
          </TableBody>
        </Table>
      </div>
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
