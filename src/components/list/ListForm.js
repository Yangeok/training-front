import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  progress: {
    margin: theme.spacing.unit * 10
  }
});

const ListForm = () => {};

export default withStyles(styles)(ListForm);
