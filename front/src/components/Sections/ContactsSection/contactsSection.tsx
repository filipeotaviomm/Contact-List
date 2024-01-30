import React from "react";
import { Section } from "./styles";
import ContactsList from "../../../components/ContactsList/contactsList";

const ContactsSection = () => {
  return (
    <Section>
      <input />
      <button>Todos</button>
      <button>Família</button>
      <button>Amigos</button>
      <button>Trabalho</button>
      <button>Escola</button>
      <div>
        <ContactsList />
      </div>
    </Section>
  );
};

export default ContactsSection;
