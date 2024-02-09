import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
