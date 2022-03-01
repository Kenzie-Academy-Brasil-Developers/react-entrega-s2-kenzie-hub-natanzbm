import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h2 {
        color: var(--color-primary);
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 10px;
    min-width: 300px;
    max-width: 370px;
    justify-content: space-between;

    button {
        background-color: var(--grey-3);
        height: 30px;
        width: 70px;
        font-size: 0.8rem;

        :hover {
            background-color: var(--grey-1);
        }
    }
`;

export const Box = styled.div`
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px #00000040;
    border-radius: 4px;
    padding: 30px 20px 20px 20px;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 370px;

    h4 {
        margin-bottom: 15px;
    }

    span {
        color: var(--grey-1);
        font-size: 0.7rem;
        font-weight: 600;
    }
`;