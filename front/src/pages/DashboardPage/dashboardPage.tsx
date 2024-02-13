import { Main } from "./styles";
import Header from "../../components/Header/header";
import SearchSection from "../../components/Sections/SearchSection/searchSection";
import ContactsSection from "../../components/Sections/ContactsSection/contactsSection";
import FavoritesModal from "../../components/Modals/FavoritesModal/favoritesModal";
import CreateContactModal from "../../components/Modals/CreateContactModal/createContactModal";
import { useContactContext } from "../../hooks/useContactContext";
import { useUserContext } from "../../hooks/useUserContext";
import UpdateUserModal from "../../components/Modals/UpdateUserModal/updateUserModal";
import ConfirmDeleteUserModal from "../../components/Modals/ConfirmDeleteUserModal/confirmDeleteUserModal";
import ConfirmDeleteContactModal from "../../components/Modals/ConfirmDeleteContactModal/confirmDeleteContactModal";

const DashboardPage = () => {
  const { favsIsVisible, CreateContactModalIsVisible, confirmDeleteContact } =
    useContactContext();
  const { isUpdateUserModalOpen, confirmDeleteUser } = useUserContext();
  console.log(Object.keys(confirmDeleteContact));
  return (
    <Main>
      <Header />
      <SearchSection />
      <ContactsSection />
      {favsIsVisible && <FavoritesModal />}
      {CreateContactModalIsVisible && <CreateContactModal />}
      {isUpdateUserModalOpen && <UpdateUserModal />}
      {confirmDeleteUser && <ConfirmDeleteUserModal />}
      {Object.keys(confirmDeleteContact).length > 0 && (
        <ConfirmDeleteContactModal />
      )}
    </Main>
  );
};

export default DashboardPage;
