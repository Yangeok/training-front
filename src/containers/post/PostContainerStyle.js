export const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    }
  },
  tableHead: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  tableRow: {
    [theme.breakpoints.down('sm')]: {}
  },
  tableCell: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: '10px 10px 10px 10px',
      textAlign: 'right',
      '&::before': {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.75rem',
        fontWeight: '500',
        display: 'flex',
        content: 'attr(data-label)'
      }
    }
  },
  progress: {
    margin: theme.spacing.unit * 10
  }
});
