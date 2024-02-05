import styled from "styled-components";

export const Li = styled.li`
  width: 270px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  gap: 5px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      margin-bottom: 10px;
    }
  }

  .edit_remove_buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
