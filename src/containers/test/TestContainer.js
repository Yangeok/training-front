import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTests } from 'store/actions';
import React, { Component } from 'react';
import { TestForm } from 'components';

class TestContainer extends Component {
  componentDidMount() {
    this.props.getTests('https://training-log-back.herokuapp.com/blog/1/100');
  }

  render() {
    const { isLoading, people } = this.props;
    console.log(people);
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
