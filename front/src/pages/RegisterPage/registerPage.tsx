import { Container, Main } from "./styles";
import { RegisterForm } from "../../components/Forms/RegisterForm/registerForm";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <Main>
      <Container>
        <h1 className="title">LISZT</h1>
        <h2>Cadastre-se</h2>
        <RegisterForm />
        <div className="div_link">
          <p>Já possui uma conta? Faça</p>
          <Link to="/">login!</Link>
        </div>
      </Container>
    </Main>
  );
};

export default RegisterPage;
