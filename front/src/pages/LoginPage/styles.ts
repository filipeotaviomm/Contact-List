import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(
    360deg,
    #0a9bb4 0,
    #147cac 25%,
    #53bcf2 50%,
    #5087ab 75%,
    #425a6e 100%
  );

  & > div {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 300px;
    height: 360px;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;

    & > h1 {
      background: linear-gradient(
        360deg,
        #0a9bb4 0,
        #147cac 25%,
        #53bcf2 50%,
        #5087ab 75%,
        #425a6e 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: 35px;
    }
  }

  .title {
    text-align: center;
  }

  .div_register {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;

    & > a {
      color: blue;
    }
  }
`;
