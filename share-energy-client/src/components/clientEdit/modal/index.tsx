import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { ClienteManagerContext } from '../../../context/ClientManagerContext';
import { IUser } from '../../../context/interfaces';
import { ClientUsinesField } from './clientUsinesField';
import { camelCaseToWords } from '../../../utils';
import useCrud from '../../../hooks/useCrud';
import { UserContext } from '../../../context/UserContext';

export default function AddressForm() {
  const { selectedClient } = useContext(ClienteManagerContext);

  const { user } = useContext(UserContext);

  const {
    editHandler, setClient, client, crudMessage, deleteHandler,
  } = useCrud();

  useEffect(() => {
    if (selectedClient) {
      setClient(selectedClient);
    }
  }, [selectedClient]);

  if (selectedClient && client && user) {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Editar cliente
            </Typography>
          </Grid>
          {(Object.keys(selectedClient) as Array<keyof IUser>).map((e) => {
            if (typeof selectedClient[e] !== 'object') {
              return (
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" gutterBottom>
                    {camelCaseToWords(e)}
                  </Typography>
                  <TextField
                    required
                    id={e}
                    name={e}
                    fullWidth
                    value={client[e]}
                    onChange={(event) => setClient(
                      {
                        ...client,
                        [event.target.name]:
                            typeof selectedClient[e] !== 'number'
                              ? event.target.value : Number(event.target.value),
                      },
                    )}
                    variant="outlined"
                    type={typeof selectedClient[e]}
                  />
                </Grid>
              );
            } return null;
          })}
          <ClientUsinesField client={client} setClient={setClient} />
          <Grid item xs={12} style={{ display: 'flex', gap: '10px' }}>
            {crudMessage && (
            <Typography variant="h6" color="error" gutterBottom>
              {crudMessage}
            </Typography>
            )}
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', gap: '10px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => editHandler(client, user?.usuario, user?.tipo, user?.token)}
            >
              Salvar
            </Button>
            <Button
              onClick={() => deleteHandler(user?.usuario, user?.tipo, user?.token)}
              variant="contained"
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              Excluir cliente
            </Button>
            <Button variant="contained" color="secondary">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </>
    );
  } return <h1>Loading</h1>;
}
