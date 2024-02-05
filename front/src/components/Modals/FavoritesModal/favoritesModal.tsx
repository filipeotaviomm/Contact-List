import { useContext } from "react";
import { Modal } from "./styles";
import FavoritesList from "../../FavoritesList/favoritesList";
import { IoClose } from "react-icons/io5";
import { ContactContext } from "../../../providers/ContactContext";

const FavoritesModal = () => {
  const { setFavsIsVisible } = useContext(ContactContext);
  return (
    <Modal>
      <div>
        <button className="close" onClick={() => setFavsIsVisible(false)}>
          <IoClose />
        </button>
        <h1>Favoritos</h1>
        <FavoritesList />
      </div>
    </Modal>
  );
};

export default FavoritesModal;
