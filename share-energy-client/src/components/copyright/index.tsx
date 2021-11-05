import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useLoginStyles } from '../../styles/login';

export function Copyright() {
  const classes = useLoginStyles();

  return (
    <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Share Energy
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
