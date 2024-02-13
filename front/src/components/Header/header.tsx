import { useUserContext } from "../../hooks/useUserContext";
import MenuHeader from "./MenuHeader/menuHeader";
import { Head } from "./styles";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const { user, isMenuOpen, setIsMenuOpen } = useUserContext();

  const firstLetterName = user.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <Head>
      <div>
        <h1 className="logo">LISZT</h1>
      </div>
      <div className="user_box">
        {user.avatar ? (
          <img className="avatar" src={user.avatar} alt="user-photo" />
        ) : (
          <div className="first_letter">
            <p>{firstLetterName}</p>
          </div>
        )}

        <p>{user.name ? user.name : "carregando..."}</p>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <TiArrowSortedDown className="button_menu" size={20} />
        </button>
        {isMenuOpen ? <MenuHeader /> : null}
      </div>
    </Head>
  );
};

export default Header;
