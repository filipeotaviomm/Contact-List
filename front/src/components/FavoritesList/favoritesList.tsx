import { Ul } from "./styles";
import FavoritesCard from "./FavoritesCard/favoritesCard";
import { IContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const FavoritesList = () => {
  const { favoritesList } = useContactContext();
  return (
    <Ul>
      {favoritesList.map((contact: IContact) => (
        <FavoritesCard key={contact.id} contact={contact} />
      ))}
    </Ul>
  );
};

export default FavoritesList;
