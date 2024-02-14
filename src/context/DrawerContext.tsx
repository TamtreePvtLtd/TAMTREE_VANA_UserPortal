import { createContext, useContext, useState, ReactNode } from "react";

export const enum DrawerEnum {
  Navbar = 1,
  MyBag,
  Search,
}

interface ContextProps {
  drawerState: {
    isMyBagDrawerOpen: boolean;
    isNavbarDrawerOpen: boolean;
    isSearchDrawerOpen: boolean;
  };
  updateDrawerState: (drawerName: DrawerEnum) => void;
}

const DrawerContext = createContext<ContextProps>({
  drawerState: {
    isMyBagDrawerOpen: false,
    isNavbarDrawerOpen: false,
    isSearchDrawerOpen: false,
  },
  updateDrawerState: () => {},
});

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [drawerState, setDrawerState] = useState({
    isMyBagDrawerOpen: false,
    isNavbarDrawerOpen: false,
    isSearchDrawerOpen: false,
  });

  const updateDrawerState = (drawerName: DrawerEnum) => {
    setDrawerState((prevState) => {
      switch (drawerName) {
        case DrawerEnum.Navbar:
          return {
            ...prevState,
            isNavbarDrawerOpen: !prevState.isNavbarDrawerOpen,
          };
        case DrawerEnum.MyBag:
          return {
            ...prevState,
            isMyBagDrawerOpen: !prevState.isMyBagDrawerOpen,
          };
        case DrawerEnum.Search:
          return {
            ...prevState,
            isSearchDrawerOpen: !prevState.isSearchDrawerOpen,
          };
        default:
          return prevState;
      }
    });
  };
  

  const contextValue = {
    updateDrawerState,
    drawerState,
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  return useContext(DrawerContext);
}
