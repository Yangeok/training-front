import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { styles } from './HomeContainerStyle';
import { LoadingForm, MainForm } from 'components';
import { connect } from 'react-redux';
import { getPosts } from 'store/actions';

class HomeContainer extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this._getYoutubePosts();
    this._getBlogPosts();
    this.timer = setInterval(this._progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _getBlogPosts = async () => {
    const { getPosts } = this.props;

    await getPosts(`blog/post/1/15`);
  };
  _getYoutubePosts = async () => {
    const { getPosts } = this.props;

    await getPosts(`youtube/post/1/15`);
  };

  _progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { isLoading, classes, posts } = this.props;
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
                <div className={classes.gridContent}>
                  <h3>블로그</h3>
                  <ul>
                    {posts &&
                      posts.map(post => {
                        return (
                          <li className={classes.gridList}>
                            <a href={post.link}>
                              {post.title.substring(0, 40)}...
                            </a>{' '}
                            {post.creator}
                          </li>
                        );
                      })}
                  </ul>
                </div>
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
                <div className={classes.gridContent}>
                  <h3>유튜브</h3>
                  <ul>
                    <li className={classes.gridList}>
                      Lorem ipsum dolor sit amet, consetetur dwqdqd dqwdqwd...
                      Author
                    </li>
                  </ul>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.post.isLoading,
  posts: state.post.payload,
  error: state.post.error
});

const mapDispatchToProps = dispatch => ({
  getPosts: url => dispatch(getPosts.request(url))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default withStyles(styles)(connectModule);
