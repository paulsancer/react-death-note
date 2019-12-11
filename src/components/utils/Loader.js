import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    textAlign: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999
  },
  loader: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto'
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};
