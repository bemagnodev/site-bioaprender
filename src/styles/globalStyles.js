import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #fffdf0;

  }
`;

export default GlobalStyle;
