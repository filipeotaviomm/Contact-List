import { ICardContact } from "../../../types/types";
import { Li } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";

const FavoritesCard = ({ favorite }: ICardContact) => {
  return (
    <Li>
      <div>
        <h3>{favorite.name}</h3>
        <button className="remove" title="Remover" aria-label="remove">
          <RiDeleteBin6Line size={18} />
        </button>
      </div>
      <p>Telefone: {favorite.phone}</p>
      <p>E-mail:{favorite.email}</p>
      <p>Categoria:{favorite.category}</p>
      <p>Criado em:{favorite.createdAt}</p>
    </Li>
  );
};

export default FavoritesCard;
