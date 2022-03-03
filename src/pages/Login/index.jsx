import { Redirect, useHistory } from "react-router-dom";
import { Box, Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import * as yup from "yup";

const Login = ({ auth, setAuth }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    api
      .post("./sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:data", JSON.stringify(user));

        setAuth(true);

        toast.success("Login efetuado com sucesso!");

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Credenciais incorretas!"));
  };

  const handleNavigation = (path) => history.push(path);

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h2>Kenzie Hub</h2>
      <Box>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Button type="submit" disabled={!isDirty}>
            Entrar
          </Button>
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
