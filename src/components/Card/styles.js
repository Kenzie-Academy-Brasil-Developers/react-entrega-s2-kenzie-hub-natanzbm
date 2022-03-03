import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: center;

    div {
        display: flex;
        flex-direction: row;
        background: var(--grey-4);
        justify-content: space-between;
        padding: 0.5rem 1rem;
        height: 40px;

        :hover {
            background: var(--grey-2);
            cursor: pointer;
            transition: 0.5s;

            span {
                color: var(--white);
            }
            
        }

        h2 {
            font-size: 0.9rem;
        }

        span {
            color: var(--grey-1);
            font-weight: 400;
            font-size: 0.8rem;
        }
    }
`;