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
  const [customer_fav, setCustomerFav] = useState([]);

  const addOrRemoveFromCustomerFav = (itemID: string) => {
    const setFromState = new Set(customer_fav);

    //find specific itemID from state
    let findItemIDFromState = Array.from(setFromState).find((i) => i == itemID);

    if (findItemIDFromState) {
      //remove item from state if already exist
      setFromState.delete(itemID);

      return setCustomerFav(Array.from(setFromState));
    }

    //add item to state if does not exist
    setFromState.add(itemID);

    return setCustomerFav(Array.from(setFromState));
  };

  useEffect(() => {
    setMenuList([...MenuList]);
    setCustomer([...Customers]);
  }, [customer_fav]);

  return (
    <AppContext.Provider
      value={{ menuList, customers, customer_fav, addOrRemoveFromCustomerFav }}
    >
      {children}
    </AppContext.Provider>
  );
};
