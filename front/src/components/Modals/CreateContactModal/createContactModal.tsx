import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import CreateContactForm from "../../Forms/CreateContactForm/createContactForm";
import { useContactContext } from "../../../hooks/useContactContext";

const CreateContactModal = () => {
  const { setCreateContactModalIsVisible } = useContactContext();
  return (
    <Modal>
      <div>
        <button
          className="close"
          onClick={() => setCreateContactModalIsVisible(false)}
        >
          <IoClose />
        </button>
        <h1>Novo Contato</h1>
        <CreateContactForm />
      </div>
    </Modal>
  );
};

export default CreateContactModal;
