import React from "react";
import { Main } from "./styles";
import Header from "../../components/Header/header";
import FavoritesSection from "../../components/Sections/FavoritesSection/favoritesSection";
import ContactsSection from "../../components/Sections/ContactsSection/contactsSection";

const DashboardPage = () => {
  return (
    <Main>
      <Header />
      <FavoritesSection />
      <ContactsSection />
    </Main>
  );
};

export default DashboardPage;
