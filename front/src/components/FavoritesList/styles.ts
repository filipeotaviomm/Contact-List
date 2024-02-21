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
    left: 533px;
    width: 300px;
    background: linear-gradient(to bottom right, #ffcccc, #ff9999);

    & > button {
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 15px 5px;
      width: 100%;
    }
  }
`;

export const Parag = styled.p`
  margin-top: 20px;
`;
