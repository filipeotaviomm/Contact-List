import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  gap: 5px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > h3 {
      margin-bottom: 10px;
    }

    & > .remove {
      display: flex;
      gap: 10px;
    }
  }
`;
