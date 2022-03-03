import { Container } from "./styles";

const Card = ({ newTech }) => {
  if (newTech.length > 0) {
    return newTech.map((element, index) => {
      return (
        <Container key={index} id={element.id}>
          <div>
            <h2>{element.title}</h2>
            <span>{element.status}</span>
          </div>
        </Container>
      );
    });
  } else {
    return <h3>Você não possui tecnologias cadastradas</h3>;
  }
};

export default Card;
