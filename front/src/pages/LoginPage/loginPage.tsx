import React from "react";
import { Container, Main } from "./styles";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm/loginForm";

const LoginPage = () => {
  return (
    <Main>
      <Container>
        <h1>LISZT</h1>
        <h2>Login</h2>
        <LoginForm />
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </Container>
    </Main>
  );
};

export default LoginPage;
