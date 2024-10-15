import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-weight: 500;
  }

  .error {
    display: flex;
    margin-top: 1px;
    color: red;
  }
`;
