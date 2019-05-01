import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TestForm } from 'components';

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => {};

const connectModule = connect(
  mapStateToProps,
  null
)(TestForm);

export default withRouter(connectModule);
