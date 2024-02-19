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
    setInputSearch,
    setFavsIsVisible,
    setCreateContactModalIsVisible,
    cleanFilters,
    categoryButton,
    setCategoryButton,
  } = useContactContext();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputSearch(searchInputValue);
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
              placeholder="   Digite o nome do contato"
            />
            <button type="submit">
              <IoSearch size={22} className="search" />
            </button>
          </form>
        </div>
        <div className="div_buttons">
          <Button
            className={categoryButton === "" ? "clicked" : ""}
            onClick={cleanFilters}
          >
            Todos
          </Button>
          <Button
            className={categoryButton === "family" ? "clicked" : ""}
            onClick={() => setCategoryButton("family")}
          >
            Família
          </Button>
          <Button
            className={categoryButton === "friends" ? "clicked" : ""}
            onClick={() => setCategoryButton("friends")}
          >
            Amigos
          </Button>
          <Button
            className={categoryButton === "work" ? "clicked" : ""}
            onClick={() => setCategoryButton("work")}
          >
            Trabalho
          </Button>
          <Button
            className={categoryButton === "school" ? "clicked" : ""}
            onClick={() => setCategoryButton("school")}
          >
            Escola
          </Button>
          <Button onClick={() => setCreateContactModalIsVisible(true)}>
            <BsPersonPlus size={22} />
          </Button>
          <Button onClick={() => setFavsIsVisible(true)}>
            <FaRegHeart size={17} />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default SearchSection;
