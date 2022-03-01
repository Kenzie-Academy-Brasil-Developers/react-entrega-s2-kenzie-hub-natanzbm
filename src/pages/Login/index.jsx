import { useHistory } from "react-router-dom";
import { Box, Container } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  const history = useHistory();

  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <h2>Kenzie Hub</h2>
      <Box>
        <h4>Login</h4>
        <form>
          <Input label="Email" />
          <Input label="Senha" type="password" />
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
