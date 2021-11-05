import React from 'react';

import { Grid } from '@material-ui/core';

const Loading = () => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item>
      <img style={{ width: '100px' }} src="/loading.gif" alt="loading gif" />
    </Grid>
  </Grid>
);

export default Loading;
