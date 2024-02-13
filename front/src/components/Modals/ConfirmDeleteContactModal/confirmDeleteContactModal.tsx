import { useState } from "react";
import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { useContactContext } from "../../../hooks/useContactContext";
import { IContact } from "../../../types/types";

const ConfirmDeleteContactModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { confirmDeleteContact, setConfirmDeleteContact, deleteContact } =
    useContactContext();

  return (
    <Modal>
      <div className="modalBox">
        <button
          onClick={() => setConfirmDeleteContact({} as IContact)}
          className="close"
        >
          <IoClose />
        </button>
        <div className="modalBody">
          <p>
            Você tem certeza que deseja deletar o contato "
            {confirmDeleteContact.name}"?
          </p>
          <div className="btns">
            <button
              disabled={loading}
              onClick={() => deleteContact(confirmDeleteContact.id, setLoading)}
              className="btnYesNo yes"
            >
              Sim, quero remover
            </button>
            <button
              disabled={loading}
              onClick={() => setConfirmDeleteContact({} as IContact)}
              className="btnYesNo no"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteContactModal;
