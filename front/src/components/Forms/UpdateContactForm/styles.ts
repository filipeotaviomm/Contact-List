import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

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
    font-weight: 600;

    &:hover {
      background-color: #5087ab;
    }
  }
`;
