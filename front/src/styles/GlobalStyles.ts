import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
  }


  ul,
  ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  input,
  textarea,
  select {
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyles;
