export const styles = theme => ({
  divContent: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '95%',
      margin: 'auto'
    },
    maxWidth: '90%',
    margin: 'auto'
  },
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
        fontWeight: '500',
        content: 'attr(data-label)'
      },
      '&:first-child': {
        borderTop: '1px solid rgba(225, 225, 225, 1)'
      },
      '&:last-child': {
        paddingRight: '10px',
        marginBottom: '1rem'
      }
    }
  },
  pagination: {
    textAlign: 'center'
  }
});
