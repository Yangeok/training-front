import React, { Component } from 'react';
import { getTests } from 'store/actions';
import { TestContainer } from 'containers';

class TestForm extends Component {
  // const TestForm = ({ isLoading }) => {

  render() {
    return (
      <>
        <h2>TestForm</h2>
        <TestContainer />
      </>
    );
  }
}

export default TestForm;
