export const styles = theme => ({
  tableHead: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  tableCell: {
    [theme.breakpoints.down('sm')]: {
      padding: '5px 10px 5px 10px',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'space-between',
      '&::before': {
        color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'left',
        fontSize: '0.75rem',
        fontWeight: '600',
        content: 'attr(data-label)'
      },
      '&:first-child': {
        borderTop: '1px solid rgba(200, 200, 200, 1)'
      },
      '&:last-child': {
        paddingRight: '10px',
        marginBottom: '1rem',
        borderBottom: '1px solid rgba(200, 200, 200, 1)'
      }
    }
  },
  progress: {
    margin: theme.spacing.unit * 10
  },
  pagination: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {}
  }
});
