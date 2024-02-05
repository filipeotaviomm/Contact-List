import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  /* background: hsla(0, 0%, 50%, 0.5);
  background: rgba(0, 0, 0, 0.751); */
  background: rgba(18, 18, 20, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    overflow-y: auto;
    position: relative;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
      background-color: #eb5757;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px 5px;
    }

    .close:hover {
      opacity: 0.9;
    }
  }
`;
