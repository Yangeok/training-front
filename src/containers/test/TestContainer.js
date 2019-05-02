import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTests } from 'store/actions';
import React, { Component } from 'react';
import { TestForm } from 'components';
import * as api from 'lib/getLists';

class TestContainer extends Component {
  componentDidMount() {
    // this.props.getTests('blog/1/100');
    this._getLists();
  }

  _getLists = async () => {
    const a = await this.props.getTests('blog/1/100');
    // const a = await api.getLists('blog/1/100');
    console.log(a);
  };

  render() {
    const { isLoading, people } = this.props;
    return (
      <>
        <h3>TestContainer</h3>
        <TestForm isLoading={isLoading} people={people} />
        {isLoading === true ? <div>true</div> : <div>false</div>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.test.isLoading,
  people: state.test
});

const mapDispatchToProps = dispatch => ({
  getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

export default withRouter(connectModule);
