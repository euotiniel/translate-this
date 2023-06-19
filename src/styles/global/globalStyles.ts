import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.dark};
        font-family: 'Inter';
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;