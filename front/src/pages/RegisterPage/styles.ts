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
  gap: 10px;
  padding: 20px;
  border-radius: 10px;

  .title {
    text-align: center;
  }
`;
