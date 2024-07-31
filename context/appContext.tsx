"use client";

import { MenuList } from "@/data/AppData";
import { AppContextInterface, MenuTypes } from "@/types";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuList, setMenuList] = useState<MenuTypes[]>([]);

  useEffect(() => {
    setMenuList([...MenuList]);
  });

  return (
    <AppContext.Provider value={{ menuList }}>{children}</AppContext.Provider>
  );
};
