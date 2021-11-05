import { Typography, Grid } from '@material-ui/core';
import React from 'react';

const Title = ({ pageTitle }: { pageTitle: String }): JSX.Element => (
  <Grid item xs={12}>
    <Typography variant="h6" component="h2" align="justify">
      {pageTitle}
    </Typography>
  </Grid>
);
export default Title;
