import { Head } from "./styles";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const user = {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxMYbpoWaK75qgvZJfZB0cAdA2ZT0NVYv5g&usqp=CAU",
    name: "Filipe",
  };

  return (
    <Head>
      <h1>LISZT</h1>
      <div>
        <img className="avatar" src={user.avatar} alt="user-photo" />
        <p>{user.name}</p>
        <button>
          <TiArrowSortedDown size={20} />
        </button>
      </div>
    </Head>
  );
};

export default Header;
