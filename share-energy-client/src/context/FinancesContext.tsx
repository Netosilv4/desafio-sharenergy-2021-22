import React, { createContext } from 'react';
import useBilling from '../hooks/useBilling';
import { IFinancesContext } from './interfaces';

export const FinancesContext = createContext<IFinancesContext>({} as IFinancesContext);

export const FinancesContextProvider: React.FC = ({ children }) => {
  const { productionDetails, integrate } = useBilling();

  return (
    <FinancesContext.Provider
      value={{ productionDetails, integrate }}
    >
      {children}
    </FinancesContext.Provider>
  );
};
