import React, { useContext } from "react";
import { Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { ContactContext } from "../../../providers/ContactContext";

const CreateContactModal = () => {
  const { setAddContactIsVisible } = useContext(ContactContext);
  return (
    <Modal>
      <div>
        <button className="close" onClick={() => setAddContactIsVisible(false)}>
          <IoClose />
        </button>
        <h1>Novo Contato</h1>
      </div>
    </Modal>
  );
};

export default CreateContactModal;
