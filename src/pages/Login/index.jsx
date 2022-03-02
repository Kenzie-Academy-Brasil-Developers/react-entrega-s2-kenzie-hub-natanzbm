import { useHistory } from "react-router-dom";
import { Box, Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
  };
  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <h2>Kenzie Hub</h2>
      <Box>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label="Email"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Button type="submit">Entrar</Button>
          <span>Ainda não possui uma conta?</span>
          <Button
            type="button"
            greySchema
            onClick={() => handleNavigation("/signup")}
          >
            Cadastre-se
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
