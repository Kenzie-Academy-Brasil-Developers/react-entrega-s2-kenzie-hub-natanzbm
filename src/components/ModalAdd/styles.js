import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 25%;
    border-radius: 4px;
    border: 2px solid var(--grey-2);
    width: 310px;
    height: 330px;
    display: flex;
    flex-direction: column;
`;

export const ContainerHeader = styled.div`
    background: var(--grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 40px;
    width: 100%;

    h2 {
        font-size: 0.8rem;
        color: var(--white);
    }

    button {
        width: 25px;
        height: 25px;
        background: none;
        border: none;
        color: var(--grey-1);
    }

`;

export const Content = styled.div`
    background: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 100%;

    span {
        font-size: 0.8rem;
        color: var(--negative);
    }

    label {
        font-size: 0.8rem;
    }

    input, select, button {
        width: 100%;
    }

    button {
        font-size: 0.9rem;
    }

    input {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
        color: var(--white);
        border-radius: 3px;
        height: 40px;
        margin: 15px 0;
        padding: 1rem;
        font-size: 0.8rem;

        :focus {
            outline: 1px solid var(--grey-0);
            border-radius: 3px;
        }

        ::placeholder {
            color: var(--grey-1);
            font-size: 0.8rem;
        }

    }

    select {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
        color: var(--white);
        border-radius: 3px;
        height: 40px;
        margin-top: 15px;
        padding: 0 1rem;

        :focus {
            outline: 1px solid var(--grey-0);
            border-radius: 3px;
        }

        ::placeholder {
            color: var(--grey-1);
            font-size: 0.8rem;
        }

    }

`;