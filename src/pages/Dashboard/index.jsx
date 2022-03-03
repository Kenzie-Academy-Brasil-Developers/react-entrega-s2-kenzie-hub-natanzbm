import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  ContainerHeader,
  ContainerUser,
  ContainerTechs,
} from "./styles";
import Button from "../../components/Button";
import ModalAdd from "../../components/ModalAdd";
import api from "../../services/api";

const Dashboard = ({ auth, setAuth }) => {
  const [userData] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newTech, setNewTech] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${userData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNewTech(response.userData.techs);
      });
  }, [newTech, userData.id, token]);

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
  };

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      {addModal && (
        <ModalAdd
          setAddModal={setAddModal}
          newTech={newTech}
          setNewTech={setNewTech}
        />
      )}
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
        <header>
          <h4>Tecnologias</h4>
          <Button onClick={() => setAddModal(true)}>+</Button>
        </header>
        <div>Teste</div>
      </ContainerTechs>
    </Container>
  );
};

export default Dashboard;
