import React, { useContext } from "react";
import { Main } from "./styles";
import Header from "../../components/Header/header";
import SearchSection from "../../components/Sections/SearchSection/searchSection";
import ContactsSection from "../../components/Sections/ContactsSection/contactsSection";
import FavoritesModal from "../../components/Modals/FavoritesModal/favoritesModal";
import { ContactContext } from "../../providers/ContactContext";
import CreateContactModal from "../../components/Modals/CreateContactModal/createContactModal";

const DashboardPage = () => {
  const { favsIsVisible, addContactIsVisible } = useContext(ContactContext);
  return (
    <Main>
      <Header />
      <SearchSection />
      <ContactsSection />
      {favsIsVisible ? <FavoritesModal /> : null}
      {addContactIsVisible ? <CreateContactModal /> : null}
    </Main>
  );
};

export default DashboardPage;
