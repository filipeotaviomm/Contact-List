import { Li } from "./styles";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardContact } from "../../../types/types";
import { useContactContext } from "../../../hooks/useContactContext";
import { FaRegHeart } from "react-icons/fa";

const ContactsCard = ({ contact }: ICardContact) => {
  const { setConfirmDeleteContact, favoritesList } = useContactContext();

  return (
    <Li>
      <div>
        <h3>{contact.name}</h3>
        <div className="edit_remove_buttons">
          <button
            onClick={() => favoritesList.push(contact)} //conferir isso
            title="Favoritar"
            aria-label="favorit"
          >
            <FaRegHeart size={15} />
          </button>
          <button title="Editar" aria-label="edit">
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
