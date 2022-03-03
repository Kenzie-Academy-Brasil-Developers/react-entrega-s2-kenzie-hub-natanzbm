import { Container } from "./styles";
import { useEffect, useState } from "react";

const Card = ({ newTech, setEditModal, setEditTech }) => {
  const [infosTech, setInfosTech] = useState([]);

  useEffect(() => {
    setEditTech(infosTech);
  }, [infosTech, setEditTech]);

  const handleTech = (title, status, id) => {
    setInfosTech({
      title: title,
      status: status,
      id: id,
    });
    setEditModal(true);
  };

  if (newTech.length > 0) {
    return newTech.map((element, index) => {
      return (
        <Container
          key={index}
          id={element.id}
          onClick={() => handleTech(element.title, element.status, element.id)}
        >
          <div>
            <h2>{element.title}</h2>
            <span>{element.status}</span>
          </div>
        </Container>
      );
    });
  } else {
    return (
      <Container>
        <h4>Você não possui tecnologias cadastradas</h4>
      </Container>
    );
  }
};

export default Card;
