import React, { createContext } from 'react';

type DrawerContextType = {
  open: boolean,
  openDrawer: VoidFunction,
  closeDrawer: VoidFunction,
};

const DrawerContext = createContext<DrawerContextType>({} as DrawerContextType);

export default DrawerContext;
