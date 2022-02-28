import { useHistory } from "react-router-dom";
import { Box, Container, ContainerHeader } from "./styles";
import Button from "../../components/Button";

const Login = () => {
  const history = useHistory();

  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <ContainerHeader>
        <h2>Kenzie Hub</h2>
        <Button onClick={() => handleNavigation("/login")}>Voltar</Button>
      </ContainerHeader>
      <Box>
        <h4>Crie sua conta</h4>
        <span>Rápido e grátis, vamos nessa</span>
        <form>
          <label>
            Nome
            <input type="text" placeholder="Digite aqui seu nome" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Digite aqui seu email" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="Digite aqui sua senha" />
          </label>
          <label>
            Confirmar Senha
            <input type="password" placeholder="Digite novamente sua senha" />
          </label>
          <label>
            Selecionar módulo
            <select name="select">
              <option value="select1" selected>
                Primeiro Módulo
              </option>
              <option value="select2">Segundo Módulo</option>
              <option value="select3">Terceiro Módulo</option>
              <option value="select4">Quarto Módulo</option>
              <option value="select5">Quinto Módulo</option>
              <option value="select6">Sexto Módulo</option>
            </select>
          </label>
        </form>
        <Button onClick={() => handleNavigation("/login")}>Cadastrar</Button>
      </Box>
    </Container>
  );
};

export default Login;
