import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  height: 100vh;
`;
