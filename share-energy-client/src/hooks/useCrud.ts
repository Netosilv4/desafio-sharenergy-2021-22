/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState } from 'react';
import { IUser } from '../context/interfaces';

const useCrud = () => {
  const [client, setClient] = useState<IUser>();
  const [crudMessage, setCrudMessage] = useState<string>();

  const editHandler = async (
    clientBody: IUser, username: string, type: string, token: string,
  ) => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const editResponse = await axios
        .post(`http://localhost:8080/editclient?clientId=${client?.numeroCliente}&username=${username}&type=${type}`,
          clientBody);
      setCrudMessage(editResponse.data.message);
    } catch (err: any) {
      if (err.response) {
        setCrudMessage(err.response.data);
      } else {
        setCrudMessage('Erro de conexão com o servidor, tente novamente mais tarde.');
      }
    }
  };

  const deleteHandler = async (username: string, type: string, token: string) => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const deleteResponse = await axios
        .delete(`http://localhost:8080/deleteclient?clientId=${client?.numeroCliente}&username=${username}&type=${type}`);
      setCrudMessage(deleteResponse.data.message);
    } catch (err: any) {
      if (err.response) {
        setCrudMessage(err.response.data);
      } else {
        setCrudMessage('Erro de conexão com o servidor, tente novamente mais tarde.');
      }
    }
  };

  return {
    editHandler,
    client,
    setClient,
    crudMessage,
    deleteHandler,
  };
};

export default useCrud;
