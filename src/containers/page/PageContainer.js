import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLists } from 'store/actions';
import PageForm from 'components/page/PageForm';

const mapStateToProps = state => ({
  isLoading: state.page.isLoading
});

const mapDispatchToProps = dispatch => ({
  request: bindActionCreators(getLists.request, dispatch),
  getLists: url => dispatch(getLists.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageForm);

export default withRouter(connectModule);
