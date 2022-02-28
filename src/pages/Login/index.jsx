import { useHistory } from "react-router-dom";
import { Box, Container } from "./styles";
import Button from "../../components/Button";

const Login = () => {
  const history = useHistory();

  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <h2>Kenzie Hub</h2>
      <Box>
        <h4>Login</h4>
        <form>
          <label>
            Email
            <input type="email" placeholder="Insira seu email" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="Insira sua senha" />
          </label>
        </form>
        <Button onClick={() => handleNavigation("/home")}>Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button onClick={() => handleNavigation("/signup")} greySchema>
          Cadastre-se
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
