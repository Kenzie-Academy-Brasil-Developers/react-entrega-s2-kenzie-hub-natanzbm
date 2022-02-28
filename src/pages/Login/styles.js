import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h2 {
        margin-bottom: 20px;
        color: var(--color-primary);
    }
`;

export const Box = styled.div`
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px #00000040;
    border-radius: 4px;
    padding: 30px 20px;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 370px;

    h4 {
        margin-bottom: 15px;
    }

    label {
        font-size: 0.8rem;
    }

    input {
        background: var(--grey-2);
        border: solid 1px var(--grey-2);
        color: var(--grey-0);
        border-radius: 3px;
        padding: 0px 12px;
        margin: 7px 0px;
        width: 100%;
        height: 40px;

        :focus {
            outline: 1px solid var(--grey-0);
        }

        ::placeholder {
            color: var(--grey-1);
        }
    }

    span {
        color: var(--grey-1);
        font-size: 0.7rem;
        font-weight: 600;
    }
`;