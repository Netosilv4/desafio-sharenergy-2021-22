import { ThemeProvider } from '@material-ui/core/styles';
import React, { createContext } from 'react';
import useModal from '../hooks/useModal';
import { useSidebar } from '../hooks/useSideBar';
import { ICompContext } from './interfaces';

import { theme } from '../theme';

export const ComponentsContext = createContext<ICompContext>({} as ICompContext);

export const ComponentsProvider: React.FC = ({ children }) => {
  const { sidebarState, toggleDrawer } = useSidebar();

  const { handleClose, handleOpen, open } = useModal();
  return (
    <ComponentsContext.Provider value={{
      sidebarState, toggleDrawer, handleClose, handleOpen, open,
    }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ComponentsContext.Provider>
  );
};
