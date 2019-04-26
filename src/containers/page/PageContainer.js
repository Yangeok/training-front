import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBlogList } from 'store/actions';
import PageForm from 'components/page/PageForm';

const mapStateToProps = state => {
  const { isLoading } = this.props;
  return {
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    request: bindActionCreators(getBlogList.request, dispatch)
  };
};

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageForm);

export default withRouter(connectModule);
