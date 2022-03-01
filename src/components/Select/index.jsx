import { Container, SelectContainer } from "./styles";

const Select = ({ label, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <SelectContainer>
        <select {...rest} />
      </SelectContainer>
    </Container>
  );
};

export default Select;
