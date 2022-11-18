import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    a {
        color: black;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
