import React from 'react';

import { Grid, Typography } from '@material-ui/core';

const WelcomeText = ({ name } : { name: string }): JSX.Element => (
  <Grid item xs={12}>
    <Typography variant="h4">
      Olá,
      {' '}
      {name}
      {' '}
      !
    </Typography>
    <Typography variant="subtitle1">
      Seja bem vindo(a)
    </Typography>
  </Grid>
);

export default WelcomeText;
