import React from 'react';
import Title from '../components/uiComponents/title';
import ClientsMenu from '../components/clientsMenu';
import ClientsTable from '../components/clientsTable';
import SpringModal from '../components/clientEdit';

const ClientInfo: React.FC = () => (
  <>
    <Title pageTitle="Gerenciamento de Clientes" />
    <ClientsMenu />
    <ClientsTable />
    <SpringModal />
  </>
);

export default ClientInfo;
