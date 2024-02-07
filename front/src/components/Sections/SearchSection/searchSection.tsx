import { Section } from "./styles";
import { Button } from "../../../styles/ButtonStyles";
import { BsPersonPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useContactContext } from "../../../hooks/useContactContext";

const SearchSection = () => {
  const { setFavsIsVisible, setAddContactIsVisible } = useContactContext();
  return (
    <Section>
      <div>
        <div>
          <div className="div_input_search">
            <input placeholder="Digite o nome do contato" />
            <IoSearch className="search" />
          </div>
        </div>
        <div className="div_buttons">
          <Button>Todos</Button>
          <Button>Família</Button>
          <Button>Amigos</Button>
          <Button>Trabalho</Button>
          <Button>Escola</Button>
          <Button onClick={() => setAddContactIsVisible(true)}>
            <BsPersonPlus size={20} />
          </Button>
          <Button onClick={() => setFavsIsVisible(true)}>
            <FaRegHeart size={15} />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default SearchSection;
