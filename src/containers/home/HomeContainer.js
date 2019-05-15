import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styles } from './HomeContainerStyle';

class HomeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridMain}>
        <Grid className={classes.gridSub} sm={6}>
          <Paper className={classes.paper}>
            <div className={classes.gridContent}>
              <h3>블로그</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consetetur dwqdqd dqwdqwd...
                  Author
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
                <li>Lorem ipsum dolor sit amet, consetetur... Author</li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid className={classes.gridSub} item sm={6}>
          <Paper className={classes.paper}>
            <div className={classes.gridContent}>
              <h3>유튜브</h3>
              <ul>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
                <li>content</li>
              </ul>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HomeContainer);
