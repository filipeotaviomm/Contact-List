import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > p {
    color: ${(props) => props.theme.contrastColor};
  }

  & > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  
  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    & > button {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.contrastColor};
    }
  }

  .anotherPageNumber {
    font-weight: 700;
  }
`;
