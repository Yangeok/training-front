export const styles = theme => ({
  divContent: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '97%',
      margin: 'auto'
    }
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
    margin: '15px'
  },
  gridItem: {
    margin: '10px'
  },
  gridContent: {
    margin: '10px 10px 40px 10px',
    fontSize: '13px'
  },
  gridList: {
    paddingBottom: '10px'
  },
  progress: {
    margin: theme.spacing.unit * 10
  }
});
