import { useUserContext } from "../../hooks/useUserContext";
import MenuHeader from "./MenuHeader/menuHeader";
import { Head } from "./styles";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  const { user, isMenuOpen, setIsMenuOpen, isLightTheme, setIsLightTheme } =
    useUserContext();

  const firstLetterName = user.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <Head>
      <div className="div_blues">
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

          <p>{user.name ? user.name : ""}</p>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <TiArrowSortedDown className="button_menu" size={20} />
          </button>
          {isMenuOpen ? <MenuHeader /> : null}
        </div>
      </div>
      <div className="div_themes">
        <button onClick={() => setIsLightTheme(!isLightTheme)}>
          {isLightTheme ? (
            <IoMdMoon size={35} />
          ) : (
            <MdLightMode size={40} color="white" />
          )}
        </button>
      </div>
    </Head>
  );
};

export default Header;
