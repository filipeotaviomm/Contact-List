import { ICardContact } from "../../../types/types";
import { Li } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";

const FavoritesCard = ({ contact }: ICardContact) => {
  return (
    <Li>
      <div>
        <h3>{contact.name}</h3>
        <button className="remove" title="Remover" aria-label="remove">
          <RiDeleteBin6Line size={18} />
        </button>
      </div>
      <p>Telefone: {contact.phone}</p>
      <p>E-mail:{contact.email}</p>
      <p>Categoria:{contact.category}</p>
      <p>Criado em:{contact.createdAt}</p>
    </Li>
  );
};

export default FavoritesCard;
