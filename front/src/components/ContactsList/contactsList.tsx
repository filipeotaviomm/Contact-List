import { Div } from "./styles";
import ContactsCard from "./ContactsCard/contactsCard";
import { IListContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const ContactsList = () => {
  const { loading, contactsResult, search } = useContactContext();
  return (
    <Div>
      {search ? <p>Resultado de busca para: {search}</p> : null}
      {contactsResult.length > 0 ? (
        <ul>
          {contactsResult.map((favorite: IListContact) => (
            <ContactsCard key={favorite.id} favorite={favorite} />
          ))}
        </ul>
      ) : (
        <p>"Nenhum resultado encontrado"</p>
      )}
    </Div>
  );
};

export default ContactsList;
