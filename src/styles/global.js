import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --success: #3fe864;
        --negative: #e83f5b;
    }

    body {
        background: var(--grey-4);
        color: var(--grey-0);
    }

    button {
        cursor: pointer;
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }
`;