import React, { useContext } from 'react';
import {
  Grid, Table, TableHead, TableCell, TableRow, TableBody, TableContainer, Paper,
} from '@material-ui/core';
import { UserContext } from '../../../context/UserContext';
import { useDashboardStyles } from '../../../styles/dashboard';
import { ProdDetails } from '../../../context/interfaces';

const ClientTable = ({ productionDetails } : { productionDetails: ProdDetails }) => {
  const classes = useDashboardStyles();
  const { user } = useContext(UserContext);
  return user ? (
    <Grid item xs={12} md={9}>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Cliente
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
            <TableRow key={user?.usuario}>
              <TableCell>{user?.nomeCliente}</TableCell>
              <TableCell>{user?.usinas[0].percentualDeParticipacao}</TableCell>
              <TableCell>
                {((user?.usinas[0]
                  .percentualDeParticipacao / 100) * productionDetails.total).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  ) : <h1>Loading</h1>;
};

export default ClientTable;
