import React, { Component } from 'react';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  CircularProgress,
  withStyles,
  Paper
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { PageForm } from 'components';

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
