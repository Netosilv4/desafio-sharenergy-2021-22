import { useEffect, useState } from 'react';

import axios from 'axios';

import { IUser } from '../context/interfaces';

const useUser = () => {
  const [user, setUser] = useState<IUser | undefined>();

  const [username, setUsername] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const [userErrorMessage, setUserErrorMessage] = useState<string>();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser) as IUser);
    }
  }, []);

  const login = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/login?username=${username}&password=${password}`);

      localStorage.setItem('user', JSON.stringify(response.data.user));

      setUser(response.data.user);

      return setUserErrorMessage(undefined);
    } catch (err: any) {
      if (err.response) {
        return setUserErrorMessage(err.response.data);
      }
      return setUserErrorMessage('Por favor, tente novamente mais tarde');
    }
  };

  const logout = () => {
    setUser({} as IUser);

    localStorage.removeItem('user');

    window.location.reload();
  };

  return {
    user,
    login,
    logout,
    setPassword,
    setUsername,
    userErrorMessage,
    username,
    password,
  };
};

export default useUser;
