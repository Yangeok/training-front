export const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 0 0'
    }
  },
  progress: {
    margin: theme.spacing.unit * 10
  }
});
