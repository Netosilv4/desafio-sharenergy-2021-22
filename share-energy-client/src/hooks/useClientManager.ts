/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../context/interfaces';

const useClientManager = () => {
  const [managerFilter, setManagerFilter] = useState<string>('');

  const [managerTerm, setManagerTerm] = useState<keyof IUser>('nomeCliente');

  const [clientList, setClientList] = useState<IUser[] | undefined>(undefined);

  const [filteredClients, setFilteredClients] = useState<IUser[] | undefined>(undefined);

  const [selectedClient, setSelectedClient] = useState<IUser | undefined>(undefined);

  const selectClient = (_id: string) => {
    setSelectedClient(clientList?.find((e) => e._id === _id));
  };

  useEffect(() => {
    if (clientList) {
      const filtered = clientList
        .filter((client) => String(
          client[managerTerm],
        ).toLowerCase().includes(String(managerFilter).toLowerCase()));
      setFilteredClients(filtered);
    }
  }, [managerFilter]);

  const getClients = async (token: string, username: string, type: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const clients = await axios.get(`http://localhost:8080/clients?username=${username}&type=${type}`);
      setClientList(clients.data);
    } catch (err : any) {
      // eslint-disable-next-line no-console
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (clientList) {
      setFilteredClients(clientList);
    }
  }, [clientList]);

  return {
    managerFilter,
    setManagerFilter,
    managerTerm,
    setManagerTerm,
    clientList,
    setClientList,
    getClients,
    filteredClients,
    selectedClient,
    selectClient,
  };
};

export default useClientManager;
