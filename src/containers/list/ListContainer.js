import React, { Component } from 'react';
import {
  TableBody,
  withStyles,
  Table,
  TableHead,
  Button
} from '@material-ui/core';
import { styles } from './ListContainerStyle';
import { LoadingForm, ListForm, TableHeadForm, ButtonForm } from 'components';
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
    const {
      getLists,
      location
      // history
    } = this.props;
    const platform = location.pathname.split('/')[1];
    // let id = location.pathname.split('/')[2];

    // const isId = id === ':id' ? history.push(`/${platform}/1/100`) : 1;
    // const isId = typeof id !== Number;
    // if (isId) {
    //   id = 1;
    //   history.push(`/${platform}/${id}/100`);
    // }
    getLists(`${platform}/1/100`);
  };

  _tableHead = () => {
    return ['AUTHOR', 'DESCRIPTION'];
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, lists, total } = this.props;
    const { completed } = this.state;
    return (
      <div>
        <ButtonForm total={total} />
        <div className={classes.divContent}>
          <Table>
            {isLoading ? (
              <LoadingForm completed={completed} />
            ) : (
              <>
                <TableHead>
                  <TableHeadForm
                    table={classes.tableHead}
                    heads={this._tableHead()}
                  />
                </TableHead>
                <TableBody>
                  <ListForm table={classes.tableCell} lists={lists} />
                </TableBody>
              </>
            )}
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.list.isLoading,
  lists: state.list.payload,
  total: state.list.pageMeta,
  error: state.list.error
});

const mapDispatchToProps = dispatch => ({
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default withStyles(styles)(connectModule);
