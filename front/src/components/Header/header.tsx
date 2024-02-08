import { useUserContext } from "../../hooks/useUserContext";
import { Head } from "./styles";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const { user } = useUserContext();

  const firstLetterName = user.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <Head>
      <h1>LISZT</h1>
      <div>
        {user.avatar ? (
          <img className="avatar" src={user.avatar} alt="user-photo" />
        ) : (
          <div className="first_letter">
            <p>{firstLetterName}</p>
          </div>
        )}

        <p>{user.name ? user.name : "carregando..."}</p>
        <button>
          <TiArrowSortedDown size={20} />
        </button>
      </div>
    </Head>
  );
};

export default Header;
