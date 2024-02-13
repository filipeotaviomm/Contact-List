import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { useUserContext } from "../../../hooks/useUserContext";
import { UpdateUserForm } from "../../Forms/UpdateUserForm/updateUserForm";

const UpdateUserModal = () => {
  const { setIsUpdateUserModalOpen } = useUserContext();
  return (
    <Modal>
      <div>
        <button
          className="close"
          onClick={() => setIsUpdateUserModalOpen(false)}
        >
          <IoClose />
        </button>
        <h1>Editar seus Dados</h1>
        <UpdateUserForm />
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
