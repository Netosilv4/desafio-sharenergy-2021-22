import React, { useContext, useEffect } from 'react';
import {
  Grid, InputLabel, Select, MenuItem, TextField,
} from '@material-ui/core';
import { useDashboardStyles } from '../../styles/dashboard';
import UIButton from '../uiComponents/button';
import { UserContext } from '../../context/UserContext';
import { keyPrettier } from '../../utils';
import { ClienteManagerContext } from '../../context/ClientManagerContext';
import { IUser } from '../../context/interfaces';

const ClientsMenu = () => {
  const classes = useDashboardStyles();

  const { user } = useContext(UserContext);

  const {
    managerFilter, managerTerm, setManagerFilter, setManagerTerm, getClients,
  } = useContext(ClienteManagerContext);

  useEffect(() => {
    getClients(user?.token as string, user?.usuario as string, user?.tipo as string);
  }, []);

  return (
    <Grid className={classes.chartMenu} item container direction="row">

      <InputLabel className={classes.inputLabel}>
        <span>Filtrar por</span>
        <Select
          value={managerTerm}
          onChange={(e) => setManagerTerm(e.target.value as keyof IUser)}
        >
          {user
            ? (Object.keys(user) as Array<keyof typeof keyPrettier>)
              .filter((key) => Object.keys(keyPrettier)
                .includes(key)).map((e) => (
                  <MenuItem
                    value={e}
                    key={e}
                  >
                    {keyPrettier[`${e}`]}
                  </MenuItem>
              )) : ''}
        </Select>
      </InputLabel>

      <InputLabel className={classes.inputLabel}>
        <span>Buscar</span>
        <TextField value={managerFilter} onChange={(e) => setManagerFilter(e.target.value)} />
      </InputLabel>
      <UIButton text="Filtrar" color="primary" />
    </Grid>
  );
};

export default ClientsMenu;
