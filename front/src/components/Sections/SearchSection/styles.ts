import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  * {
    color: ${(props) => props.theme.contrastColor};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .form_input_search {
    border: 1px solid ${(props) => props.theme.contrastColor};
    border-radius: 3px;
    padding: 5px;
    width: 500px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > input {
      outline: none;
      border: none;
    }
  }

  .div_buttons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;

    & > .clicked {
      border: 2px solid blue;
    }
  }
`;
