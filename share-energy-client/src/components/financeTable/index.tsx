import React, { useContext, useEffect } from 'react';
import { ClienteManagerContext } from '../../context/ClientManagerContext';
import { ProdDetails } from '../../context/interfaces';
import { PlantInfoContext } from '../../context/PlantInfoContext';
import { UserContext } from '../../context/UserContext';
import AdminTable from './adminTable';
import ClientTable from './clientTable';

const FinanceTable = ({ productionDetails } : { productionDetails: ProdDetails }) => {
  const { user } = useContext(UserContext);
  const { selectedPlant } = useContext(PlantInfoContext);
  const { clientList, getClients } = useContext(ClienteManagerContext);

  useEffect(() => {
    getClients(user?.token as string, user?.usuario as string, user?.tipo as string);
  }, []);

  if (user && user.tipo !== 'admin') {
    return <ClientTable productionDetails={productionDetails} />;
  }

  if (user && selectedPlant && clientList) {
    return <AdminTable productionDetails={productionDetails} />;
  }
  return <h1>Loading </h1>;
};

export default FinanceTable;
