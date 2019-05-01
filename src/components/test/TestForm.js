import React, { Component } from 'react';
import { getTests } from 'store/actions';

class TestForm extends Component {
  // const TestForm = ({ isLoading }) => {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <h2>TEST</h2>;
  }
}

export default TestForm;
