import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { styles } from './HomeContainerStyle';
import { LoadingForm, MainForm } from 'components';
import { connect } from 'react-redux';
import { getHomeGrids } from 'store/actions';

class HomeContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this._getHomeGrids();
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _getHomeGrids = async () => {
    const { getHomeGrids } = this.props;
    getHomeGrids(`blog/post/1/15`, `youtube/post/1/15`);
  };
  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, blogPosts, youtubePosts } = this.props;
    const { completed } = this.state;
    return (
      <div className={classes.divContent}>
        <Grid className={classes.gridMain}>
          <Grid className={classes.gridSub} sm={6}>
            <Paper className={classes.paper}>
              {isLoading ? (
                <LoadingForm
                  completed={completed}
                  progress={classes.progress}
                />
              ) : (
                <MainForm posts={blogPosts}>
                  <h3>블로그</h3>
                </MainForm>
              )}
            </Paper>
          </Grid>
          <Grid className={classes.gridSub} item sm={6}>
            <Paper className={classes.paper}>
              {isLoading ? (
                <LoadingForm
                  completed={completed}
                  progress={classes.progress}
                />
              ) : (
                <MainForm posts={youtubePosts}>
                  <h3>유튜브</h3>
                </MainForm>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.home.isLoading,
  blogPosts: state.home.blog,
  youtubePosts: state.home.youtube,
  error: state.home.error
});

const mapDispatchToProps = dispatch => ({
  getHomeGrids: (blog, youtube) => dispatch(getHomeGrids.request(blog, youtube))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default withStyles(styles)(connectModule);
