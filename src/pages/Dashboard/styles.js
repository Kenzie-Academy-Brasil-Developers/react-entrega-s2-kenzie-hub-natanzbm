import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;

    h2 {
        color: var(--color-primary);
    }

`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1.5px solid var(--grey-2);

    div {
        margin: 0 20px;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 700px;
        justify-content: space-between;
    }

    button {
        background-color: var(--grey-3);
        height: 30px;
        width: 60px;
        font-size: 0.8rem;

        :hover {
            background-color: var(--grey-1);
        }

    }
    
`;

export const ContainerUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    border-bottom: 1.5px solid var(--grey-2);

    div {
        margin: 0 20px;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 700px;
        justify-content: space-between;

        p {
            font-size: 1.2rem;
            font-weight: bold;
        }

        span {
            color: var(--grey-1);
            font-size: 0.7rem;
            font-weight: 600;
        }

    }

`;

export const ContainerTechs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
        margin: 0 20px;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 700px;
        justify-content: space-between;
    }

    button {
        background-color: var(--grey-3);
        height: 30px;
        width: 30px;
        font-size: 1.5rem;

        :hover {
            background-color: var(--grey-1);
        }

    }
    
`;
