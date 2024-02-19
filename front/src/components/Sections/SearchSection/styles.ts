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
    width: 500px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    & > input {
      outline: none;
      border: none;
      border: 1px solid ${(props) => props.theme.contrastColor};
      border-radius: 3px;
      height: 45px;
      width: 100%;
    }

    & > button {
      border: 1px solid ${(props) => props.theme.whiteColor};
      border-radius: 3px;
      height: 45px;
      padding: 0px 10px;
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
