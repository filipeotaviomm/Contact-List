import React from "react";
import { Main } from "./styles";
import Header from "../../components/Header/header";
import SearchSection from "../../components/Sections/SearchSection/searchSection";
import ContactsSection from "../../components/Sections/ContactsSection/contactsSection";
import FavoritesModal from "../../components/Modals/FavoritesModal/favoritesModal";

const DashboardPage = () => {
  return (
    <Main>
      <Header />
      <SearchSection />
      <ContactsSection />
      {/* <FavoritesModal /> */}
    </Main>
  );
};

export default DashboardPage;
