export const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  gridMain: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    display: 'flex'
  },
  gridSub: {
    [theme.breakpoints.down('sm')]: {},
    margin: '15px'
  },
  gridItem: {
    margin: '10px'
  },
  gridContent: {
    margin: '10px 10px 40px 10px'
  },
  gridUl: {
    padding: '10px'
  }
});
