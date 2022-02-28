import Button from "../../components/Button";
import { Box, Container } from "./styles";

const Login = () => {
  return (
    <Container>
      <h2>Kenzie Hub</h2>
      <Box>
        <h4>Login</h4>
        <form>
          <label>
            Email
            <input type="text" placeholder="Insira seu email" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="Insira sua senha" />
          </label>
        </form>
        <Button>Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button greySchema>Cadastre-se</Button>
      </Box>
    </Container>
  );
};

export default Login;
