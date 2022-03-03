import { Redirect } from "react-router-dom";
import {
  Container,
  ContainerHeader,
  ContainerUser,
  ContainerTechs,
} from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

const Dashboard = ({ auth, setAuth }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    return history.push("/login");
  };

  const userData = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <ContainerHeader>
        <div>
          <h2>KenzieHub</h2>
          <Button onClick={() => handleLogout()}>Sair</Button>
        </div>
      </ContainerHeader>
      <ContainerUser>
        <div>
          <p>Olá, {userData.name}</p>
          <span>{userData.course_module}</span>
        </div>
      </ContainerUser>
      <ContainerTechs>
        <div>
          <h4>Tecnologias</h4>
          <Button>+</Button>
        </div>
      </ContainerTechs>
    </Container>
  );
};

export default Dashboard;
