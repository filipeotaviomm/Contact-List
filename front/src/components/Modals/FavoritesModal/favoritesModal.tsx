import React from "react";
import { Modal } from "./styles";
import FavoritesList from "../../FavoritesList/favoritesList";

const FavoritesModal = () => {
  return (
    <Modal>
      <div>
        <button className="close">X</button>
        <h1>Favoritos</h1>
        <FavoritesList />
      </div>
    </Modal>
  );
};

export default FavoritesModal;
