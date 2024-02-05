import { IChildren, IUserContext } from "../types/types";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: IChildren) => {
  const values: IUserContext = {};

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
