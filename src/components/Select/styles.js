import styled from "styled-components";

export const Container = styled.div`
    text-align: left;

    div {
        font-size: 0.8rem;
        margin: 15px 0px;
    }
`;

export const SelectContainer = styled.div`
    background-color: var(--grey-2);
    border: solid 1px var(--grey-2);
    border-radius: 3px;
    width: 100%;

    select {
        background: var(--grey-2);
        color: var(--grey-0);
        border: 0;
        padding: 0 0.8rem;
        width: 100%;
        height: 40px;

        :focus {
            outline: 1px solid var(--grey-0);
            border-radius: 3px;
        }

    }
`;