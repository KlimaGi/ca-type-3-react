import React, { createContext, useState, useMemo } from 'react';

type DrawerContextType = {
  open: boolean,
  openDrawer: VoidFunction,
  closeDrawer: VoidFunction,
};

const DrawerContext = createContext<DrawerContextType>({} as DrawerContextType);

type DrawerProviderProps = {
  children: React.ReactNode
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const drawerContextValue = useMemo(() => ({
    open,
    openDrawer: () => setOpen(true),
    closeDrawer: () => setOpen(false),
  }), [open]);

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
