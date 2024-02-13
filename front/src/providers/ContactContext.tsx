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
  const [inputSearch, setInputSearch] = useState("");
  const [categoryButton, setCategoryButton] = useState("");
  const [confirmDeleteContact, setConfirmDeleteContact] = useState<IContact>(
    {} as IContact
  );
  const favoritesList: IContact[] = [];

  const { isUserLogged } = useUserContext();
  // const token: string | null = localStorage.getItem("@contact-liszt:token");

  useEffect(() => {
    const getAllContacts = async () => {
      const token: string | null = localStorage.getItem("@contact-liszt:token");
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
      const token: string | null = localStorage.getItem("@contact-liszt:token");
      setLoading(true);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/contacts", formData);
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

  const deleteContact = async (
    removedId: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token: string | null = localStorage.getItem("@contact-liszt:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`/contacts/${removedId}`);
      setConfirmDeleteContact({} as IContact);
      toast.success(`"${confirmDeleteContact.name}" foi deletado com sucesso`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    const contactsListFiltered = contactsList.filter(
      (contact) => contact.id !== removedId
    );
    setContactsList(contactsListFiltered);
  };

  const contactsResult = contactsList.filter((contact) => {
    const searchFilter =
      inputSearch === ""
        ? true
        : contact.name.toLowerCase().includes(inputSearch.toLowerCase());

    const categoryFilter =
      categoryButton === "" ? true : contact.category === categoryButton;

    return searchFilter && categoryFilter;
  });

  const cleanFilters = () => {
    setInputSearch("");
    setCategoryButton("");
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
        inputSearch,
        setInputSearch,
        cleanFilters,
        categoryButton,
        setCategoryButton,
        contactsResult,
        confirmDeleteContact,
        setConfirmDeleteContact,
        deleteContact,
        favoritesList,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
