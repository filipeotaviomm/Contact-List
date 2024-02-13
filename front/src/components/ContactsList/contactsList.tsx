import { Div } from "./styles";
import ContactsCard from "./ContactsCard/contactsCard";
import { IContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const ContactsList = () => {
  const { contactsResult, inputSearch } = useContactContext();
  return (
    <Div>
      {inputSearch ? <p>Resultado de busca para: {inputSearch}</p> : null}
      {contactsResult.length > 0 ? (
        <ul>
          {contactsResult.map((contact: IContact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>"Nenhum contato cadastrado"</p>
      )}
    </Div>
  );
};

export default ContactsList;
