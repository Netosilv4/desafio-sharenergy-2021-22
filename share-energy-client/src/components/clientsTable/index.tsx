/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import {
  Table, TableContainer, TableHead, TableCell, TableRow, Paper, TableBody,
} from '@material-ui/core';
import { ClienteManagerContext } from '../../context/ClientManagerContext';
import { IUser } from '../../context/interfaces';
import UIButton from '../uiComponents/button';
import { ComponentsContext } from '../../context/ComponentsContext';
import { camelCaseToWords } from '../../utils';
import { useDashboardStyles } from '../../styles/dashboard';

const ClientsTable = () => {
  const { filteredClients, selectClient } = useContext(ClienteManagerContext);

  const classes = useDashboardStyles();

  const { handleOpen } = useContext(ComponentsContext);

  if (filteredClients && filteredClients.length > 0 && selectClient) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: '#aaa' }}>
            <TableRow>
              {
                Object.keys(filteredClients[0]).filter((e) => e !== 'usinas').map((key) => (
                  <TableCell style={{ borderBottom: 'none' }} key={key}>{camelCaseToWords(key)}</TableCell>
                ))
              }
              <TableCell>
                Editar/Excluir
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              filteredClients?.map((row, index) => (
                <TableRow style={{ background: index % 2 ? '#ddd' : '#ccc' }} key={row.usuario}>
                  {
                    (Object.keys(row) as Array<keyof IUser>)
                      .map((key) => (key !== 'usinas' ? <TableCell key={row[key]}>{row[key]}</TableCell> : null))
                  }
                  <TableCell>
                    <UIButton
                      callback={() => selectClient(row._id)}
                      action={handleOpen}
                      color="secondary"
                      text="Editar/Excluir"
                    />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return <h1>Cliente não encontrado</h1>;
};

export default ClientsTable;
