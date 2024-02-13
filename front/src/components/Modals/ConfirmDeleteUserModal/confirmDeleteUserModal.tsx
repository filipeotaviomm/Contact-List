import { useState } from "react";
import { useUserContext } from "../../../hooks/useUserContext";
import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";

const ConfirmDeleteUserModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setConfirmDeleteUser, deleteUser } = useUserContext();
  return (
    <Modal>
      <div className="modalBox">
        <button onClick={() => setConfirmDeleteUser(false)} className="close">
          <IoClose />
        </button>
        <div className="modalBody">
          <p>Você tem certeza que deseja deletar a sua conta?</p>
          <div className="btns">
            <button
              disabled={loading}
              onClick={() => deleteUser(setLoading)}
              className="btnYesNo yes"
            >
              Sim, quero remover
            </button>
            <button
              disabled={loading}
              onClick={() => setConfirmDeleteUser(false)}
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

export default ConfirmDeleteUserModal;
