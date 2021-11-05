/* eslint-disable no-param-reassign */
import { Grid, Typography, TextField } from '@material-ui/core';
import React from 'react';
import { IUser, IUsina } from '../../../context/interfaces';

export const ClientUsinesField = ({ client, setClient }:
{ client: IUser, setClient: React.Dispatch<IUser> }) => (
  <Grid item xs={12} sm={12}>
    <Typography variant="subtitle1">Usinas cadastradas</Typography>
    {
                client.usinas.map((usina: IUsina, index: number) => (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Usina
                      {' '}
                      {usina.usinaId}
                      {' '}
                      -
                      {' '}
                      Percentual de participação
                    </Typography>
                    <TextField
                      required
                      id="participation"
                      name="Percentual de participação"
                      fullWidth
                      value={client.usinas[index].percentualDeParticipacao}
                      onChange={(event) => setClient({
                        ...client,
                        usinas: [...client.usinas.filter((e) => e.usinaId !== usina.usinaId),
                          {
                            usinaId: usina.usinaId,
                            percentualDeParticipacao: Number(event.target.value),
                          }],
                      })}
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
                ))
            }
  </Grid>
);
