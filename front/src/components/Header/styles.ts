import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  width: 95%;
  border-radius: 0px 70px 70px 0px;
  background-image: linear-gradient(
    360deg,
    #0a9bb4 0,
    #147cac 25%,
    #53bcf2 50%,
    #5087ab 75%,
    #425a6e 100%
  );

  h1 {
    margin: 0 auto;
    padding-left: 70px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding-right: 40px;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .first_letter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #28c1ef;
    border: 2px solid white;

    & > p {
      font-size: 25px;
    }
  }
`;
