import { Main } from "./styles";
import Header from "../../components/Header/header";
import SearchSection from "../../components/Sections/SearchSection/searchSection";
import ContactsSection from "../../components/Sections/ContactsSection/contactsSection";
import FavoritesModal from "../../components/Modals/FavoritesModal/favoritesModal";
import CreateContactModal from "../../components/Modals/CreateContactModal/createContactModal";
import { useContactContext } from "../../hooks/useContactContext";

const DashboardPage = () => {
  const { favsIsVisible, CreateContactModalIsVisible } = useContactContext();
  return (
    <Main>
      <Header />
      <SearchSection />
      <ContactsSection />
      {favsIsVisible ? <FavoritesModal /> : null}
      {CreateContactModalIsVisible ? <CreateContactModal /> : null}
    </Main>
  );
};

export default DashboardPage;
