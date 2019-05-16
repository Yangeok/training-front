export const styles = theme => ({
  divContent: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '97%',
      margin: 'auto'
    }
  },
  paper: {
    padding: '0.5rem',
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
  }
});
