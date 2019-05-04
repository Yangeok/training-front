import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTests } from 'store/actions';
import React, { Component } from 'react';
import { TestForm } from 'components';

class TestContainer extends Component {
  componentDidMount() {
    this._getLists();
  }

  _getTests = () => {
    const url = 'https://training-log-back.herokuapp.com/blog/feed/1/100';
    const list = this.props.getTests('blog');
    return list;
  };

  render() {
    const { isLoading, people } = this.props;
    return (
      <>
        <h3>TestContainer</h3>
        <TestForm isLoading={isLoading} people={people} />
        <div>{isLoading === true ? 'true' : 'false'}</div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.test.isLoading,
  people: state.test.payload
});

const mapDispatchToProps = dispatch => ({
  getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

export default withRouter(connectModule);
