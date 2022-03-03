import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

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

        h2 {
            color: var(--color-primary);
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

    }
    
`;

export const ContainerUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 120px;
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

export const TechHeader = styled.div`
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

        button {
            background-color: var(--grey-3);
            height: 30px;
            width: 30px;
            font-size: 1.5rem;
    
            :hover {
                background-color: var(--grey-1);
            }

        }

    }

`;

export const TechList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
        background: var(--grey-3);
        border-radius: 4px;
        padding: 7px;
        margin: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 700px;
    }

`;
