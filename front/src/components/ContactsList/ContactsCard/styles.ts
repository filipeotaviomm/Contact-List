import styled from "styled-components";

export const Li = styled.li`
  width: 270px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.contrastColor};
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

  .general {
    color: ${(props) => props.theme.contrastColor};
  }

  .grey_heart {
    color: #b1bac2;
  }

  .red_heart {
    color: red;
  }

  .edit_remove_buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
