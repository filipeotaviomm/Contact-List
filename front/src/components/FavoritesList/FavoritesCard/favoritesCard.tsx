import { useContactContext } from "../../../hooks/useContactContext";
import { ICardContact, ICategories, IFavorite } from "../../../types/types";
import { Li } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";

const FavoritesCard = ({ contact }: ICardContact) => {
  const { updateLikeContact } = useContactContext();

  const isContactFavorite: IFavorite = { isFavorite: false };

  const date = new Date(contact.createdAt);
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const categories: ICategories = {
    family: "Família",
    friends: "Amigos",
    work: "Trabalho",
    school: "Escola",
    standard: "Padrão",
  };

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
      <p><span className="font_weight">Telefone:</span> {contact.phone}</p>
      <p><span className="font_weight">E-mail:</span> {contact.email}</p>
      <p><span className="font_weight">Categoria:</span> {categories[contact.category]}</p>
      <p>Criado em: {formatedDate}</p>
    </Li>
  );
};

export default FavoritesCard;
