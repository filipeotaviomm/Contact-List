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
    font-weight: 600;

    &:hover {
      background-color: #5087ab;
    }
  }
`;
