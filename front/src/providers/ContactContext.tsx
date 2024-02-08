import { useEffect, useState } from "react";
import { IChildren, IContact, IContactContext } from "../types/types";
import { createContext } from "react";
import { api } from "../services/api";
import { useUserContext } from "../hooks/useUserContext";

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext
);

export const ContactProvider = ({ children }: IChildren) => {
  const [favsIsVisible, setFavsIsVisible] = useState(false);
  const [addContactIsVisible, setAddContactIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactsList, setContactsList] = useState<IContact[] | []>([]);

  const { isUserLogged } = useUserContext();

  useEffect(() => {
    const getAllContacts = async () => {
      const token: string | null = localStorage.getItem("@contact-liszt:token");
      if (token) {
        try {
          setLoading(true);
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await api.get("/contacts");
          setContactsList(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getAllContacts();
  }, [isUserLogged]);

  return (
    <ContactContext.Provider
      value={{
        favsIsVisible,
        setFavsIsVisible,
        addContactIsVisible,
        setAddContactIsVisible,
        loading,
        contactsList,
        setContactsList,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
