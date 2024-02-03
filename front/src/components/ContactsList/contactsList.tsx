import React from "react";
import { Ul } from "./styles";
import ContactsCard from "./ContactsCard/contactsCard";
import { IListContact } from "@/types/types";

const ContactsList = () => {
  const ContactsList = [
    {
      id: "1",
      name: "Miguel",
      phone: 987652456,
      email: "miguel@mail.com",
      createdAt: "2024-01-01",
      category: "Família",
    },
    {
      id: "2",
      name: "Gabriel",
      phone: 970963526,
      email: "gabriel@mail.com",
      createdAt: "2024-01-01",
      category: "Família",
    },
    {
      id: "3",
      name: "Nathalia",
      phone: 970963526,
      email: "gabriel@mail.com",
      createdAt: "2024-01-01",
      category: "Família",
    },
    {
      id: "4",
      name: "Filipe",
      phone: 970963526,
      email: "filipeotaviomm@mail.com",
      createdAt: "2024-01-01",
      category: "Família",
    },
  ];
  return (
    <Ul>
      {ContactsList.map((favorite: IListContact) => (
        <ContactsCard key={favorite.id} favorite={favorite} />
      ))}
    </Ul>
  );
};

export default ContactsList;
