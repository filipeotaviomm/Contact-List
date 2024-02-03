import React, { ReactNode } from "react";
import { IUserContext } from "@/types/types";
import { createContext } from "react";

interface IChildren {
  children: ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: IChildren) => {
  const values: IUserContext = {};

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
