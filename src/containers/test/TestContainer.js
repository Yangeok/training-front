import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TestForm } from 'components';
import { getTests } from 'store/actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  getTests: url => dispatch(getTests.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestForm);

export default withRouter(connectModule);
