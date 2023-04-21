import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *  {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }
`;

export default GlobalStyle;