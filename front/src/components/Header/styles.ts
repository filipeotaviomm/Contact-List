import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  .div_blues {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0px;
    width: 93%;
    border-radius: 0px 70px 70px 0px;
    background-image: linear-gradient(
      360deg,
      #0a9bb4 0,
      #147cac 25%,
      #53bcf2 50%,
      #5087ab 75%,
      #425a6e 100%
    );
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
  }

  .logo {
    margin: 0 auto;
    padding-left: 70px;
    display: flex;
    margin-left: 550px;
  }

  .user_box {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding-right: 40px;
    margin-left: 300px;
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
    border-radius: 100%;
    background-color: #28c1ef;
    border: 2px solid white;
    width: 40px;
    height: 40px;
    padding: 7px;

    & > p {
      font-size: 25px;
    }
  }

  .div_themes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 7%;
  }
`;
