import { useState } from 'react';

type Anchor = 'left' | 'right';

export const useSidebar = () => {
  const [sidebarState, setSidebarState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setSidebarState({ ...sidebarState, [anchor]: open });
  };

  return {
    toggleDrawer,
    sidebarState,
    setSidebarState,
  };
};
