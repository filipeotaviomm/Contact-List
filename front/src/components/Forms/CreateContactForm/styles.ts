import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 15px;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > input {
      height: 35px;
      width: 100%;
    }

    & > select {
      height: 35px;
      margin-bottom: 10px;
    }

    & > button {
      margin-top: 15px;
    }
  }
`;
