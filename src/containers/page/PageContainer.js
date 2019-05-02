import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLists } from 'store/actions';
import React, { Component } from 'react';

class PageContainer extends Component {
  componentDidMount() {
    this._getLists();
    return <div>hh</div>;
  }

  _getLists = () => {
    this.props.getLists('');
  };

  render() {
    const { isLoading, location, match } = this.props;
    return <h2>PageContainer</h2>;
  }
}

const mapStateToProps = state => ({
  isLoading: state.page.isLoading
});

const mapDispatchToProps = dispatch => ({
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);

export default withRouter(connectModule);
