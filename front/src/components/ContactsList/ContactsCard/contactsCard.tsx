import { Li } from "./styles";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardContact, ICategories } from "../../../types/types";
import { useContactContext } from "../../../hooks/useContactContext";
import { FaHeart } from "react-icons/fa";

const ContactsCard = ({ contact }: ICardContact) => {
  const {
    setConfirmDeleteContact,
    addAnRemoveContactInFavoritesList,
    favoritesList,
    setContact,
  } = useContactContext();

  const categories: ICategories = {
    family: "Família",
    friends: "Amigos",
    work: "Trabalho",
    school: "Escola",
    standard: "Padrão",
  };

  const date = new Date(contact.createdAt);
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;

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
              className={
                favoritesList.some((favorite) => favorite.id === contact.id)
                  ? "red_heart"
                  : "grey_heart"
              }
            />
          </button>
          <button
            onClick={() => setContact(contact)}
            title="Editar"
            aria-label="edit"
            className="general"
          >
            <MdOutlineModeEditOutline size={18} />
          </button>
          <button
            onClick={() => setConfirmDeleteContact(contact)}
            title="Remover"
            aria-label="remove"
            className="general"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </div>
      <p className="general">Telefone: {contact.phone}</p>
      <p className="general">E-mail: {contact.email}</p>
      <p className="general">Categoria: {categories[contact.category]}</p>
      <p className="general">Criado em {formatedDate}</p>
    </Li>
  );
};

export default ContactsCard;
