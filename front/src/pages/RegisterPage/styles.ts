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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 600px;
  gap: 8px;
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

  .title {
    text-align: center;
  }

  .div_link {
    display: flex;
    flex-direction: row;
    gap: 3px;
    justify-content: center;

    & > a {
      color: blue;
    }
  }
`;
