import { Container, InputContainer } from "./styles";

const Input = ({ label, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
