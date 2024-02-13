import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > input {
      height: 35px;
      width: 100%;
    }
  }

  & > button {
    margin-top: 5px;
  }
`;
