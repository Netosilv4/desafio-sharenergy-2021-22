import React, { createContext } from 'react';
import useUser from '../hooks/useUser';
import { IUserContext } from './interfaces';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const {
    login, logout, setPassword, setUsername, user, userErrorMessage, username, password,
  } = useUser();

  return (
    <UserContext.Provider value={{
      login, logout, setPassword, setUsername, user, userErrorMessage, username, password,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};
