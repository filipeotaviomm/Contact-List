import { Section } from "./styles";
import { Button } from "../../../styles/ButtonStyles";
import { BsPersonPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useContactContext } from "../../../hooks/useContactContext";

const SearchSection = () => {
  const {
    searchInputValue,
    setSearchInputValue,
    setSearch,
    setFavsIsVisible,
    setCreateContactModalIsVisible,
    bringBackAllContacts,
  } = useContactContext();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInputValue);
    setSearchInputValue("");
  };

  return (
    <Section>
      <div>
        <div>
          <form onSubmit={submit} className="form_input_search">
            <input
              type="text"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              required
              placeholder="Digite o nome do contato"
            />
            <button type="submit">
              <IoSearch className="search" />
            </button>
          </form>
        </div>
        <div className="div_buttons">
          <Button onClick={bringBackAllContacts}>Todos</Button>
          <Button>Família</Button>
          <Button>Amigos</Button>
          <Button>Trabalho</Button>
          <Button>Escola</Button>
          <Button onClick={() => setCreateContactModalIsVisible(true)}>
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
