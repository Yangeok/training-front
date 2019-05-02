import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTests } from 'store/actions';
import React, { Component } from 'react';

class TestContainer extends Component {
  _getTests = () => {
    this.props.getTests('blog/post/1/100');
  };

  render() {
    const { _getTests } = this;
    const { isLoading } = this.props;
    return (
      <>
        <h3>TestContainer</h3>
        {_getTests() && <div>isLoading</div>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

export default withRouter(connectModule);
