"use client";

import { Customers, MenuList } from "@/data/AppData";
import { AppContextInterface, CustomerType, MenuTypes } from "@/types";
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
  const [customers, setCustomer] = useState<CustomerType[]>([]);

  useEffect(() => {
    setMenuList([...MenuList]);
    setCustomer([...Customers]);
  }, []);

  return (
    <AppContext.Provider value={{ menuList, customers }}>
      {children}
    </AppContext.Provider>
  );
};
