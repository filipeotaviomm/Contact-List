import { useEffect, useState } from "react";
import { IChildren, IContact, IContactContext } from "../types/types";
import { createContext } from "react";
import { api } from "../services/api";
import { useUserContext } from "../hooks/useUserContext";
import { toast } from "react-toastify";
import { ICreateContactFormValues } from "../components/Forms/CreateContactForm/createContactFormSchema";

export const ContactContext = createContext<IContactContext>(
  {} as IContactContext
);

export const ContactProvider = ({ children }: IChildren) => {
  const [favsIsVisible, setFavsIsVisible] = useState(false);
  const [CreateContactModalIsVisible, setCreateContactModalIsVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [contactsList, setContactsList] = useState<IContact[] | []>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { isUserLogged } = useUserContext();
  const token: string | null = localStorage.getItem("@contact-liszt:token");

  useEffect(() => {
    const getAllContacts = async () => {
      // if (token) {
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
      // }
    };
    getAllContacts();
  }, [isUserLogged]);

  const createContact = async (
    formData: ICreateContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      const response = await api.post("/contacts", formData);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setContactsList([...contactsList, response.data]);
      toast.success("Contato criado com sucesso");
      setCreateContactModalIsVisible(false);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contactsResult = contactsList.filter((contact) => {
    const searchFilter =
      search === ""
        ? true
        : contact.name.toLowerCase().includes(search.toLowerCase());

    const categoryFilter =
      category === "" ? true : contact.category === category;

    return searchFilter && categoryFilter;
  });

  const bringBackAllContacts = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <ContactContext.Provider
      value={{
        favsIsVisible,
        setFavsIsVisible,
        CreateContactModalIsVisible,
        setCreateContactModalIsVisible,
        loading,
        contactsList,
        setContactsList,
        createContact,
        searchInputValue,
        setSearchInputValue,
        search,
        setSearch,
        bringBackAllContacts,
        setCategory,
        contactsResult,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
