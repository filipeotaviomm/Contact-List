import { Li } from "./styles";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardContact } from "../../../types/types";
import { useContactContext } from "../../../hooks/useContactContext";
import { FaHeart } from "react-icons/fa";

const ContactsCard = ({ contact }: ICardContact) => {
  const {
    setConfirmDeleteContact,
    addAnRemoveContactInFavoritesList,
    favoritesList,
    setContact,
  } = useContactContext();

  return (
    <Li>
      <div>
        <h3>{contact.name}</h3>
        <div className="edit_remove_buttons">
          <button
            onClick={() => addAnRemoveContactInFavoritesList(contact)}
            title="Favoritar"
            aria-label="favorit"
          >
            <FaHeart
              size={18}
              color={
                favoritesList.some((favorite) => favorite.id === contact.id)
                  ? "red"
                  : "#b1bac2"
              }
            />
          </button>
          <button
            onClick={() => setContact(contact)}
            title="Editar"
            aria-label="edit"
          >
            <MdOutlineModeEditOutline size={18} />
          </button>
          <button
            onClick={() => setConfirmDeleteContact(contact)}
            title="Remover"
            aria-label="remove"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </div>
      <p>Telefone: {contact.phone}</p>
      <p>E-mail:{contact.email}</p>
      <p>Categoria:{contact.category}</p>
      <p>Criado em:{contact.createdAt}</p>
    </Li>
  );
};

export default ContactsCard;
