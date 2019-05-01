import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLists } from 'store/actions';
import { PageForm } from 'components/';

const mapStateToProps = state => ({
  isLoading: state.page.isLoading
});

const mapDispatchToProps = dispatch => ({
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageForm);

export default withRouter(connectModule);
