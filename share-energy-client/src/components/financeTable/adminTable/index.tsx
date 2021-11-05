import {
  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import React, { useContext } from 'react';

import { ClienteManagerContext } from '../../../context/ClientManagerContext';
import { ProdDetails } from '../../../context/interfaces';
import { useDashboardStyles } from '../../../styles/dashboard';

const AdminTable = ({ productionDetails } : { productionDetails: ProdDetails }) => {
  const classes = useDashboardStyles();
  const { clientList } = useContext(ClienteManagerContext);
  return (
    <Grid item xs={12} md={9}>
      <TableContainer className={classes.table} component={Paper}>
        <Table draggable>
          <TableHead>
            <TableRow>
              <TableCell>
                Clientes
              </TableCell>
              <TableCell>
                Porcentagem
              </TableCell>
              <TableCell>
                Lucro total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                clientList?.filter((e) => e.usinas[0].usinaId === 1).map((row, index) => (
                  <TableRow style={{ background: index % 2 ? 'white' : '#ccc' }} key={row.usuario}>
                    <TableCell>
                      {row.nomeCliente}
                    </TableCell>
                    <TableCell>
                      {`${row.usinas[0].percentualDeParticipacao.toFixed(2)} %`}
                    </TableCell>
                    <TableCell>
                      {`R$ ${
                        ((row.usinas[0]
                          .percentualDeParticipacao / 100) * productionDetails.total).toFixed(2)
                      }`}
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default AdminTable;
