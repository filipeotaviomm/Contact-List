import React from "react";
import { Section } from "./styles";
import FavoritesList from "../../../components/FavoritesList/favoritesList";

const FavoritesSection = () => {
  return (
    <Section>
      <h2>Contatos Favoritos</h2>
      <div>
        <FavoritesList />
      </div>
    </Section>
  );
};

export default FavoritesSection;
