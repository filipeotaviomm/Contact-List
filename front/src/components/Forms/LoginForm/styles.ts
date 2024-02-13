import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > input {
      height: 35px;
    }
  }

  & > button {
    margin-top: 5px;
  }
`;
