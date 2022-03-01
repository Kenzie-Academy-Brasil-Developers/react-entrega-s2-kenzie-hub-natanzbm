import { Container, SelectContainer } from "./styles";

const Select = ({ label, register, name, error, value, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <SelectContainer isErrored={!!error}>
        <select defaultValue={value} {...register(name)} {...rest} />
      </SelectContainer>
    </Container>
  );
};

export default Select;
