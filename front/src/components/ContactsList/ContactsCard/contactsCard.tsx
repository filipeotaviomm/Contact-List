import { Li } from "./styles";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardContact } from "../../../types/types";

const ContactsCard = ({ favorite }: ICardContact) => {
  return (
    <Li>
      <div>
        <h3>{favorite.name}</h3>
        <div className="edit_remove_buttons">
          <button className="edit" title="Editar" aria-label="edit">
            <MdOutlineModeEditOutline size={18} />
          </button>
          <button className="remove" title="Remover" aria-label="remove">
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </div>
      <p>Telefone: {favorite.phone}</p>
      <p>E-mail:{favorite.email}</p>
      <p>Categoria:{favorite.category}</p>
      <p>Criado em:{favorite.createdAt}</p>
    </Li>
  );
};

export default ContactsCard;
