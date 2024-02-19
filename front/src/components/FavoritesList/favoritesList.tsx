import { Div, Parag } from "./styles";
import FavoritesCard from "./FavoritesCard/favoritesCard";
import { IContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const FavoritesList = () => {
  const { contactsList, removeAllFavorites } = useContactContext();

  const favorites = contactsList.filter((contact) => contact.isFavorite);

  return (
    <>
      {favorites.length ? (
        <Div>
          <ul>
            {favorites.map((contact: IContact) => (
              <FavoritesCard key={contact.id} contact={contact} />
            ))}
          </ul>
          <div className="div_btn_remove">
            <button onClick={() => removeAllFavorites(favorites)}>
              Remover todos
            </button>
          </div>
        </Div>
      ) : (
        <Parag>Não há nenhum contato favorito</Parag>
      )}
    </>
  );
};

export default FavoritesList;
