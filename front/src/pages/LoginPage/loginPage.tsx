import React from "react";
import { Main } from "./styles";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm/loginForm";

const LoginPage = () => {
  return (
    <Main>
      <div>
        <h1>LISZT</h1>
        <h2>Login</h2>
        <LoginForm />
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </Main>
  );
};

export default LoginPage;
