import { useState } from "react";
import { Container, ContainerHeader, Content } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import api from "../../services/api";
import * as yup from "yup";

const ModalAdd = ({ setAddModal, newTech, setNewTech }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleTech = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setNewTech([...newTech, response.userData]);
        toast.success("Tecnologia cadastrada!");
      })
      .catch((_) => toast.error("Tecnologia já cadastrada!"));

    setAddModal(false);
  };

  return (
    <Container>
      <ContainerHeader>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={() => setAddModal(false)}>X</button>
      </ContainerHeader>
      <Content>
        <form onSubmit={handleSubmit(handleTech)}>
          <label htmlFor="name">
            Nome <span>{errors.title?.message}</span>
            <input
              type="text"
              name="title"
              {...register("title")}
              id="name"
              placeholder="Tecnologia"
            />
          </label>
          <label htmlFor="status">
            Selecionar status
            <select {...register("status")}>
              <option value="Iniciante" id="status">
                Iniciante
              </option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </label>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </Content>
    </Container>
  );
};

export default ModalAdd;
