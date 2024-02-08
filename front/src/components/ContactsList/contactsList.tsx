import { Ul } from "./styles";
import ContactsCard from "./ContactsCard/contactsCard";
import { IListContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const ContactsList = () => {
  const { loading, contactsList } = useContactContext();
  return (
    <Ul>
      {contactsList.map((favorite: IListContact) => (
        <ContactsCard key={favorite.id} favorite={favorite} />
      ))}
    </Ul>
  );
};

export default ContactsList;
