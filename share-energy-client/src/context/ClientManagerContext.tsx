import React, { createContext } from 'react';
import useClientManager from '../hooks/useClientManager';
import { IClientManagerContext } from './interfaces';

export const ClienteManagerContext = createContext<IClientManagerContext>(
  {} as IClientManagerContext,
);

export const ClienteManagerProvider: React.FC = ({ children }) => {
  const {
    clientList, managerFilter, managerTerm, setClientList,
    setManagerFilter, setManagerTerm, getClients, filteredClients, selectClient, selectedClient,
  } = useClientManager();

  return (
    <ClienteManagerContext.Provider value={{
      clientList,
      managerFilter,
      managerTerm,
      setClientList,
      setManagerFilter,
      setManagerTerm,
      getClients,
      filteredClients,
      selectClient,
      selectedClient,
    }}
    >
      {children}
    </ClienteManagerContext.Provider>
  );
};
