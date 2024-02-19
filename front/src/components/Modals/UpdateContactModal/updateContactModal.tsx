import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { useContactContext } from "../../../hooks/useContactContext";
import { UpdateContactForm } from "../../Forms/UpdateContactForm/updateContactForm";
import { IContact } from "../../../types/types";

const UpdateContactModal = () => {
  const { setEditingContact } = useContactContext();
  return (
    <Modal>
      <div>
        <button
          onClick={() => setEditingContact({} as IContact)}
          className="close"
        >
          <IoClose />
        </button>
        <h1>Editar Contato</h1>
        <UpdateContactForm />
      </div>
    </Modal>
  );
};

export default UpdateContactModal;
