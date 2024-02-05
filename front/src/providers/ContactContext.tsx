import { useState } from "react";
import { IChildren, IContactContext } from "../types/types";
import { createContext } from "react";

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext
);

export const ContactProvider = ({ children }: IChildren) => {
  const [favsIsVisible, setFavsIsVisible] = useState(false);
  const [addContactIsVisible, setAddContactIsVisible] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        favsIsVisible,
        setFavsIsVisible,
        addContactIsVisible,
        setAddContactIsVisible,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
