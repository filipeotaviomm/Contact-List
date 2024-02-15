import { Div, Parag } from "./styles";
import FavoritesCard from "./FavoritesCard/favoritesCard";
import { IContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";

const FavoritesList = () => {
  const { favoritesList, removeAllContactsFromFavoritesList } =
    useContactContext();
  return (
    <>
      {favoritesList.length > 0 ? (
        <Div>
          <ul>
            {favoritesList.map((contact: IContact) => (
              <FavoritesCard key={contact.id} contact={contact} />
            ))}
          </ul>
          <div className="div_btn_remove">
            <button onClick={removeAllContactsFromFavoritesList}>
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
