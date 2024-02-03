import React from "react";
import { Section } from "./styles";
import { Button } from "../../../styles/ButtonStyles";
import { InputSearch } from "../../../styles/InputStyles";

const SearchSection = () => {
  return (
    <Section>
      <div>
        <div>
          <InputSearch placeholder="Digite o nome do contato" />
          <div>
            <Button>Todos</Button>
            <Button>Família</Button>
            <Button>Amigos</Button>
            <Button>Trabalho</Button>
            <Button>Escola</Button>
          </div>
        </div>
        <div>
          <Button>+</Button>
          <Button>S2</Button>
        </div>
      </div>
    </Section>
  );
};

export default SearchSection;
