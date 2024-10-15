import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    padding-bottom: 60px;
    position: relative;
    width: 100%;
  }

  .div_btn_remove {
    position: fixed;
    bottom: 53px;
    right: 551px;
    width: 265px;
    background: linear-gradient(to bottom right, #ffcccc, #ff9999);
    border-radius: 3px 3px 0 0;

    & > button {
      border: 1px solid transparent;
      padding: 15px 5px;
      width: 100%;
      font-weight: 600;

      &:hover {
        background-color: #ff3232;
        border-radius: 3px 3px 0 0;
      }
    }
  }
`;

export const Parag = styled.p`
  margin-top: 20px;
`;
