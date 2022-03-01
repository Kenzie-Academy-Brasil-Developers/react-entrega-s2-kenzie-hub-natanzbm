import styled from "styled-components";

export const Container = styled.div`
    text-align: left;

    div {
        font-size: 0.8rem;
        margin: 15px 0px;
    }
`;

export const InputContainer = styled.div`
    background-color: var(--grey-2);
    border: solid 1px var(--grey-2);
    border-radius: 3px;
    width: 100%;

    input {
        background: transparent;
        color: var(--grey-0);
        border: 0;
        padding: 1rem;
        width: 100%;
        height: 40px;

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