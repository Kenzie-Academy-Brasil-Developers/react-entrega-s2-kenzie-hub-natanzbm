import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  ContainerHeader,
  ContainerUser,
  TechHeader,
  TechList,
} from "./styles";
import Button from "../../components/Button";
import ModalAdd from "../../components/ModalAdd";
import Card from "../../components/Card";
import api from "../../services/api";

const Dashboard = ({ auth, setAuth }) => {
  const [data] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:data")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newTech, setNewTech] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNewTech(response.data.techs);
      });
  }, [newTech, data.id, token]);

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
          <p>Olá, {data.name}</p>
          <span>{data.course_module}</span>
        </div>
      </ContainerUser>
      <TechHeader>
        <div>
          <h4>Tecnologias</h4>
          <Button onClick={() => setAddModal(true)}>+</Button>
        </div>
      </TechHeader>
      <TechList>
        <div>
          <Card newTech={newTech} />
        </div>
      </TechList>
    </Container>
  );
};

export default Dashboard;
