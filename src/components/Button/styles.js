import styled from "styled-components";

export const Container = styled.button`
    background: ${props => props.greySchema ? "#868e96" : "#ff577f"};
    color: var(--white);
    height: 45px;
    width: 100%;
    border-radius: 4px;
    border: ${props => props.greySchema ? "#868e96" : "#ff577f"};
    font-weight: 500;
    margin: 20px 0px;
    transition: 0.5s;

    :hover {
        background: ${props => props.greySchema ? "#343B41" : "#FF699F"};
    }
`;