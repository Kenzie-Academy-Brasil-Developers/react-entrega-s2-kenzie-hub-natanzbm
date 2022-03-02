import { useHistory, Redirect } from "react-router-dom";
import { Box, Container, ContainerHeader } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import * as yup from "yup";

const Signup = ({ auth }) => {
  const history = useHistory();

  const [value, setValue] = useState("default");

  const handleChange = (e) => setValue(e.target.value);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .matches(
        "^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "A senha deve conter, no mínimo, 8 caracteres, incluindo letra, número e caractere especial"
      )
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
    course_module: yup
      .string()
      .oneOf(
        ["module1", "module2", "module3", "module4", "module5", "module6"],
        "Campo obrigatório!"
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    delete data.passwordConfirm;

    data.bio = " ";
    data.contact = " ";

    api
      .post("/users", data)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta, tente outro email!"));
  };

  const handleNavigation = (path) => history.push(path);

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>Kenzie Hub</h2>
        <Button onClick={() => handleNavigation("/login")}>Voltar</Button>
      </ContainerHeader>
      <Box>
        <h4>Crie sua conta</h4>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label="Nome"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Digite aqui seu nome"
          />
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="Digite aqui seu email"
          />
          <Input
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
            type="password"
            placeholder="Digite aqui sua senha"
          />
          <Input
            label="Confirmar Senha"
            name="passwordConfirm"
            register={register}
            error={errors.passwordConfirm?.message}
            type="password"
            placeholder="Digite novamente sua senha"
          />
          <Select
            value={value}
            onChange={handleChange}
            label="Selecionar módulo"
            name="course_module"
            register={register}
            error={errors.course_module?.message}
          >
            <option value="default" disabled hidden>
              Selecione seu módulo
            </option>
            <option value="module1">Primeiro Módulo</option>
            <option value="module2">Segundo Módulo</option>
            <option value="module3">Terceiro Módulo</option>
            <option value="module4">Quarto Módulo</option>
            <option value="module5">Quinto Módulo</option>
            <option value="module6">Sexto Módulo</option>
          </Select>
          <Button disabled={!formState.isDirty} type="submit">
            Cadastrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
