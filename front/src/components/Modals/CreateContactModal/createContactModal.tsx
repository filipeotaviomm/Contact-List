import { useContext } from "react";
import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { ContactContext } from "../../../providers/ContactContext";
import CreateContactForm from "../../Forms/CreateContactForm/createContactForm";

const CreateContactModal = () => {
  const { setCreateContactModalIsVisible } = useContext(ContactContext);
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
