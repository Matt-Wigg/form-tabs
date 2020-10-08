import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: Roboto, Helvetica Neue, Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
        color: #221924;
        box-sizing: border-box;
    }
    h1 {
      font-size: 25px;
      font-weight: 900;
      line-height: 1.25;
    }
    body {
      display: block;
      background-color: #242582;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
    html {
      scroll-behavior: smooth;
    }
    `;

export default GlobalStyle;
