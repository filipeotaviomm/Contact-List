import React from "react";
import { Li } from "./styles";
import { ICardContact } from "@/types/types";

const FavoritesCard = (props: ICardContact) => {
  const { favorite } = props;
  return (
    <Li>
      <h3>{favorite.name}</h3>
      <p>Telefone: {favorite.phone}</p>
      <p>E-mail:{favorite.email}</p>
      <p>Categoria:{favorite.category}</p>
      <p>Criado em:{favorite.createdAt}</p>
    </Li>
  );
};

export default FavoritesCard;
