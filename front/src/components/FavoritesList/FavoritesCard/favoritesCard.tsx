import { useContactContext } from "../../../hooks/useContactContext";
import { ICardContact, IFavorite } from "../../../types/types";
import { Li } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";

const FavoritesCard = ({ contact }: ICardContact) => {
  const { updateLikeContact } = useContactContext();

  const isContactFavorite: IFavorite = { isFavorite: false };

  const date = new Date(contact.createdAt);
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <Li>
      <div>
        <h3>{contact.name}</h3>
        <button
          onClick={() => updateLikeContact(contact, isContactFavorite)}
          className="remove"
          title="Remover"
          aria-label="remove"
        >
          <RiDeleteBin6Line size={18} />
        </button>
      </div>
      <p>Telefone: {contact.phone}</p>
      <p>E-mail:{contact.email}</p>
      <p>Categoria:{contact.category}</p>
      <p>Criado em:{formatedDate}</p>
    </Li>
  );
};

export default FavoritesCard;
