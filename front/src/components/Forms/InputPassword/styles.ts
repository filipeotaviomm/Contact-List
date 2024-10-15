import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > label {
    font-weight: 500;
  }

  & > input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    height: 35px;
    width: 100%;
  }

  & > button {
    position: absolute;
    top: 33px;
    right: 10px;
    z-index: 1;
  }

  .error {
    display: flex;
    margin-top: 1px;
    color: red;
  }
`;
