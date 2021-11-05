import {
  Box, Grid, Hidden, Paper, Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDashboardStyles } from '../../styles/dashboard';
import { ComponentsContext } from '../../context/ComponentsContext';
import { UserContext } from '../../context/UserContext';

const Header: React.FC = () => {
  const classes = useDashboardStyles();

  const { user } = useContext(UserContext);

  const { toggleDrawer } = useContext(ComponentsContext);

  return (
    <Paper elevation={6}>
      <Grid className={classes.header} container direction="row">

        <Box className={classes.box}>
          <MenuIcon className={classes.icons} onClick={toggleDrawer('left', true)} />
        </Box>

        <Box className={classes.box}>
          <Hidden xsDown>
            <Typography variant="h6" style={{ color: 'white' }}>
              {user?.nomeCliente}
            </Typography>
          </Hidden>
          <AccountCircleIcon className={classes.icons} />
        </Box>

      </Grid>
    </Paper>
  );
};

export default Header;
