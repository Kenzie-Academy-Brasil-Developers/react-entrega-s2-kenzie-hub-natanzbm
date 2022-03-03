import { useState } from "react";
import { Container, ContainerHeader, Content } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import api from "../../services/api";

const ModalEdit = ({ setEditModal, editTech }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditTech = ({ status }) => {
    api
      .put(
        `/users/techs/${editTech.id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Tecnologia atualizada!"));
    setEditModal(false);
  };

  const handleDeleteTech = () => {
    api
      .delete(`/users/techs/${editTech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Tecnologia removida!"));
    setEditModal(false);
  };

  return (
    <Container>
      <ContainerHeader>
        <h2>Tecnologia Detalhes</h2>
        <button onClick={() => setEditModal(false)}>X</button>
      </ContainerHeader>
      <Content>
        <form onSubmit={handleSubmit(handleEditTech)}>
          <label htmlFor="name">
            Nome do projeto<span>{errors.title?.message}</span>
            <input
              name="title"
              value={editTech.title || ""}
              {...register("title")}
              id="name"
              disabled
            />
          </label>
          <label htmlFor="status">
            Status
            <select {...register("status")}>
              <option value="Iniciante" id="status">
                Iniciante
              </option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </label>
          <div>
            <Button type="submit">Salvar alterações</Button>
            <Button type="button" onClick={handleDeleteTech} greySchema>
              Excluir
            </Button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default ModalEdit;
