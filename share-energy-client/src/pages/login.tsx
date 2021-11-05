import React from 'react';
import { Grid } from '@material-ui/core';
import { useLoginStyles } from '../styles/login';
import { LoginForm } from '../components/loginForm';

export const Login: React.FC = () => {
  const classes = useLoginStyles();

  return (
    <Grid container direction="row" component="main" className={classes.root}>
      <Grid item xs={false} sm={5} md={8} />
      <LoginForm />
    </Grid>
  );
};
